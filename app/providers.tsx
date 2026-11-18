'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function hasUsablePostHogConfig() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

  return Boolean(
    key &&
      host &&
      !key.includes('your_api_key_here') &&
      !key.startsWith('REPLACE_WITH_') &&
      /^https:\/\/[a-z0-9.-]+\.posthog\.com$/i.test(host)
  )
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (hasUsablePostHogConfig() && key && host) {
      posthog.init(key, {
        api_host: host,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      })
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}

// Optional: A component to track page views automatically inside the Next.js App Router
export function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && hasUsablePostHogConfig()) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
