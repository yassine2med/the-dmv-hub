interface CardProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export function Card({ children, className = '', gradient = false }: CardProps) {
  if (gradient) {
    return (
      <div className={`gradient-border hub-panel p-6 ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <div className={`hub-panel rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
