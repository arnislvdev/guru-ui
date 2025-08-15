import * as React from 'react'

export type CardProps = {
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ title, description, children, footer, className }) => {
  return (
    <div className={`rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#161616] p-6 shadow-lg ${className ?? ''}`.trim()}>
      {title ? (
        <h3 className="text-xl font-semibold text-[color:var(--guru-heading,#ffffff)]">{title}</h3>
      ) : null}
      {description ? (
        <p className="mt-1 text-sm text-[color:var(--guru-body,#b3b3b3)]">{description}</p>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-6 border-t border-white/10 pt-4">{footer}</div> : null}
    </div>
  )
}


