import { NextResponse } from 'next/server'

const MAX_BODY_BYTES = 64 * 1024
const WINDOW_MS = 60 * 1000
const DEFAULT_LIMIT = 5
const MAX_BUCKETS = 10_000
const CLEANUP_INTERVAL = 100

interface RateLimitBucket {
  count: number
  resetAt: number
}

declare global {
  // Best-effort in-memory protection for Phase 1. Vercel instances do not share
  // this store, but each warm instance still gets a useful abuse brake.
  var dmvHubRateLimitStore: Map<string, RateLimitBucket> | undefined
}

const store = globalThis.dmvHubRateLimitStore ?? new Map<string, RateLimitBucket>()
globalThis.dmvHubRateLimitStore = store
let checksSinceCleanup = 0

function cleanStore(now: number) {
  checksSinceCleanup += 1
  if (checksSinceCleanup < CLEANUP_INTERVAL && store.size < MAX_BUCKETS) return

  checksSinceCleanup = 0
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key)
  }

  // Rotating spoofed IPs must not grow a warm instance without bound.
  while (store.size >= MAX_BUCKETS) {
    const oldest = store.keys().next().value
    if (typeof oldest !== 'string') break
    store.delete(oldest)
  }
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return (
    forwardedFor ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  )
}

export function isRequestTooLarge(request: Request) {
  const contentLength = request.headers.get('content-length')
  if (!contentLength) return false

  const bytes = Number(contentLength)
  return Number.isFinite(bytes) && bytes > MAX_BODY_BYTES
}

export function checkRateLimit(request: Request, scope: string, limit = DEFAULT_LIMIT) {
  const now = Date.now()
  cleanStore(now)
  const key = `${scope}:${getClientIp(request)}`
  const current = store.get(key)

  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + WINDOW_MS }
    store.set(key, next)
    return { ok: true, remaining: limit - 1, resetAt: next.resetAt }
  }

  if (current.count >= limit) {
    return { ok: false, remaining: 0, resetAt: current.resetAt }
  }

  current.count += 1
  return { ok: true, remaining: limit - current.count, resetAt: current.resetAt }
}

export function rateLimitResponse(resetAt: number) {
  const retryAfter = Math.max(1, Math.ceil((resetAt - Date.now()) / 1000))
  return NextResponse.json(
    { ok: false, message: 'Too many submissions. Please wait a minute and try again.' },
    {
      status: 429,
      headers: { 'Retry-After': String(retryAfter) },
    }
  )
}

export function oversizedResponse() {
  return NextResponse.json(
    { ok: false, message: 'Submission is too large. Please shorten it and try again.' },
    { status: 413 }
  )
}
