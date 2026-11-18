import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans, Inter, DM_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { Nav } from '@/components/sections/Nav'
import { NavParty } from '@/components/sections/NavParty'
import { Footer } from '@/components/sections/Footer'
import { FooterParty } from '@/components/sections/FooterParty'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { ContactModal } from '@/components/ui/ContactModal'
import { ChatBot } from '@/components/ui/ChatBot'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { siteConfig } from '@/lib/config'
import { ThemeProvider, ThemeNoFlashScript } from '@/components/theme/ThemeProvider'
import { ThemePickerModal } from '@/components/theme/ThemePickerModal'

// Casual (warm): Fraunces display + Plus Jakarta body.
// Party (cyber, frozen): Inter body + DM Mono labels.
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: '/og-image.png?v=2', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/og-image.png?v=2'],
  },
}

import { PostHogProvider, PostHogPageView } from './providers'
import { Suspense } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enableVercelInsights = Boolean(process.env.VERCEL)

  return (
    <html
      lang="en"
      data-theme="casual"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jakarta.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <head>
        <ThemeNoFlashScript />
      </head>
      <body className={`${jakarta.className} bg-hub-paper text-hub-text page-fade-in`}>
        <ThemeProvider>
          <PostHogProvider>
            <Suspense fallback={null}>
              <PostHogPageView />
            </Suspense>
            <ThemedSection casual={<Nav />} party={<NavParty />} />
            <main>{children}</main>
            <ThemedSection casual={<Footer />} party={<FooterParty />} />
            <ThemePickerModal />
            <ContactModal />
            <ChatBot />
            {enableVercelInsights ? (
              <>
                <Analytics />
                <SpeedInsights />
              </>
            ) : null}
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
