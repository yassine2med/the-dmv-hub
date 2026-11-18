import { siteConfig } from '@/lib/config'

/**
 * SocialLinks — a row of icon buttons for the brand's social channels.
 * Shared by both footer variants. Colors inherit from the surrounding theme
 * (warm or cyber) via the hub-* tokens; only links that are set (and not a
 * REPLACE_ placeholder) are rendered.
 */

type IconProps = { className?: string }

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.4-2.5 5.6-5.5 5.6A5.4 5.4 0 0 1 5.5 14c0-3.2 3-5.6 6.2-5v2.8c-.4-.1-.9-.2-1.3-.2-1.5 0-2.6 1.1-2.6 2.5s1.1 2.5 2.6 2.5c1.4 0 2.5-1 2.5-2.6V3h3.1z" />
    </svg>
  )
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.5h3.1V21H3.4V8.5Zm5.06 0h2.97v1.71h.04c.41-.78 1.43-1.6 2.94-1.6 3.14 0 3.72 2.07 3.72 4.76V21h-3.1v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H8.46V8.5Z" />
    </svg>
  )
}

function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.3 4.9A19 19 0 0 0 15.7 3.5l-.2.5a17.6 17.6 0 0 1 4.1 1.3 18.4 18.4 0 0 0-13.2 0A17.6 17.6 0 0 1 10.5 4l-.2-.5A19 19 0 0 0 3.7 4.9 19.7 19.7 0 0 0 .3 18a19.2 19.2 0 0 0 5.8 2.9l.7-1.2a12.4 12.4 0 0 1-1.9-.9l.5-.4a13.7 13.7 0 0 0 11.6 0l.5.4c-.6.4-1.2.6-1.9.9l.7 1.2A19.1 19.1 0 0 0 23.7 18a19.6 19.6 0 0 0-3.4-13.1ZM8.3 15.3c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3Zm7.4 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3Z" />
    </svg>
  )
}

const channels = [
  { key: 'instagram', label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { key: 'tiktok', label: 'TikTok', href: siteConfig.social.tiktok, Icon: TikTokIcon },
  { key: 'linkedin', label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { key: 'discord', label: 'Discord', href: siteConfig.discordInvite, Icon: DiscordIcon },
] as const

export function SocialLinks({ className = '' }: { className?: string }) {
  const active = channels.filter((c) => c.href && !c.href.includes('REPLACE'))
  if (active.length === 0) return null

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {active.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="group/social inline-flex h-9 w-9 items-center justify-center rounded-full border border-hub-border bg-hub-card text-hub-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-hub-terracotta/50 hover:text-hub-terracotta"
        >
          <Icon className="h-[1.05rem] w-[1.05rem]" />
        </a>
      ))}
    </div>
  )
}
