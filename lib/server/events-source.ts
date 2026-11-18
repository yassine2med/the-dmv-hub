import type { Event, LocationArea, VibeCategory } from '@/lib/types'
import { events as localEvents } from '@/data/events'
import { vibes } from '@/data/vibes'
import { siteConfig } from '@/lib/config'

/**
 * Events data source.
 *
 * By default this returns the curated list in `data/events.ts`. If
 * `EVENTS_SHEET_CSV_URL` is set (a Google Sheet "Publish to web" CSV link),
 * events are read from that sheet instead — so a non-technical organizer can
 * add a row and see it live within minutes, with no code change or deploy.
 *
 * The local list is always the fallback: if the sheet is unreachable, empty,
 * or misconfigured, the site keeps working with `data/events.ts`.
 */

const AREAS: LocationArea[] = ['DC', 'MD', 'VA', 'Virtual']
const VIBES = new Set(vibes.map((vibe) => vibe.name))
const MAX_SHEET_BYTES = 512 * 1024

function safeHttpsUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.toString() : ''
  } catch {
    return ''
  }
}

function safeImageUrl(value: string) {
  if (value.startsWith('/') && !value.startsWith('//')) return value
  return safeHttpsUrl(value)
}

function safeSheetUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname === 'docs.google.com' ? url.toString() : ''
  } catch {
    return ''
  }
}

/** Minimal RFC-4180 CSV parser (handles quotes, escaped quotes, commas, newlines). */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (char !== '\r') {
      field += char
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function toEvents(rows: string[][]): Event[] {
  if (rows.length < 2) return []

  const header = rows[0].map((cell) => cell.trim().toLowerCase())
  const pick = (...names: string[]) => {
    for (const name of names) {
      const at = header.indexOf(name)
      if (at !== -1) return at
    }
    return -1
  }

  const cols = {
    id: pick('id'),
    title: pick('title', 'name', 'event'),
    date: pick('date', 'datetime', 'when'),
    area: pick('area', 'locationarea', 'zone'),
    locationLabel: pick('location', 'locationlabel', 'place', 'neighborhood'),
    vibe: pick('vibe', 'category'),
    description: pick('description', 'details'),
    discord: pick('discord', 'discordlink', 'link', 'rsvp'),
    image: pick('image', 'imageurl', 'photo'),
    featured: pick('featured', 'feature', 'highlight'),
  }

  const out: Event[] = []
  for (let r = 1; r < rows.length; r++) {
    const cells = rows[r]
    if (!cells || cells.every((c) => c.trim() === '')) continue
    const get = (index: number) => (index >= 0 && index < cells.length ? cells[index].trim() : '')

    const title = get(cols.title)
    const date = get(cols.date)
    if (!title || !date) continue // skip incomplete rows

    const areaRaw = get(cols.area) as LocationArea
    const vibeRaw = get(cols.vibe)
    const featuredRaw = get(cols.featured).toLowerCase()

    out.push({
      id: get(cols.id) || slugify(title),
      title: title.slice(0, 140),
      date,
      locationArea: AREAS.includes(areaRaw) ? areaRaw : 'DC',
      locationLabel: get(cols.locationLabel).slice(0, 160),
      vibe: (VIBES.has(vibeRaw as VibeCategory) ? vibeRaw : 'Food') as VibeCategory,
      description: get(cols.description).slice(0, 3_000),
      discordLink: safeHttpsUrl(get(cols.discord)) || siteConfig.discordInvite,
      imageUrl: safeImageUrl(get(cols.image)) || undefined,
      featured: ['true', 'yes', '1', 'x', 'y'].includes(featuredRaw),
    })
  }
  return out
}

export async function getEvents(): Promise<Event[]> {
  const configuredUrl = process.env.EVENTS_SHEET_CSV_URL
  if (!configuredUrl) return localEvents

  const url = safeSheetUrl(configuredUrl)
  if (!url) return localEvents

  try {
    // Re-read the sheet at most every 5 minutes (edits go live without a deploy).
    const res = await fetch(url, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5_000),
    })
    if (!res.ok) return localEvents
    const text = await res.text()
    if (new TextEncoder().encode(text).byteLength > MAX_SHEET_BYTES) return localEvents
    const parsed = toEvents(parseCsv(text))
    return parsed.length > 0 ? parsed : localEvents
  } catch {
    return localEvents
  }
}
