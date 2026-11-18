'use client'

/**
 * ContactButton — triggers the site-wide contact form modal by dispatching a global custom event.
 */
export function ContactButton({
  email,
  subject,
  label = 'Get in Touch',
  size = 'md',
  className = '',
}: {
  email: string
  subject?: string
  label?: string
  size?: 'md' | 'lg'
  className?: string
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { subject } }))
  }

  const sizeCls = size === 'lg' ? 'px-7 py-4 text-sm' : 'px-5 py-3 text-sm'
  const classes =
    `btn-sheen inline-flex items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.045] font-extrabold uppercase tracking-[0.01em] text-hub-text backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-hub-teal/[0.45] hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-hub-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-hub-black ${sizeCls}`

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${classes} ${className}`}
    >
      {label}
    </button>
  )
}
