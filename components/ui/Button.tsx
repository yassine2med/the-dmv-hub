import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  type,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-extrabold tracking-[0.01em] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-hub-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-hub-black'

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase',
    md: 'px-5 py-3 text-sm uppercase',
    lg: 'px-7 py-4 text-sm uppercase',
  }

  const variants = {
    primary:
      'btn-sheen bg-hub-gradient text-black shadow-[0_12px_30px_-12px_rgba(60,40,20,0.30)] hover:shadow-[0_18px_40px_-14px_rgba(60,40,20,0.36)] hover:-translate-y-0.5',
    secondary:
      'border border-hub-border bg-hub-card text-hub-text hover:border-hub-terracotta hover:bg-hub-sand hover:-translate-y-0.5',
    ghost:
      'text-hub-muted hover:text-hub-text hover:bg-hub-sand',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    // Internal routes use Next's Link. Everything else (mailto:, tel:, http)
    // renders a plain <a> — Next's Link doesn't fire protocol links reliably.
    const isInternal = href.startsWith('/')
    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    const isMailOrTel = href.startsWith('mailto:') || href.startsWith('tel:')
    const anchorProps =
      external || !isMailOrTel ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
