import * as React from 'react'
import { cn } from '../utils/cn'

type Variant = 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'subtle'
type Size = 'sm' | 'md'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
  size?: Size
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = 'accent',
  size = 'md',
  ...props
}) => {
  const sizes: Record<Size, string> = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-0.5 text-xs'
  }
  const variants: Record<Variant, string> = {
    accent:
      'bg-[color:var(--guru-accent,#1e90ff)] text-white hover:opacity-95',
    outline:
      'border border-[color:var(--guru-accent,#1e90ff)] text-[color:var(--guru-accent,#1e90ff)]',
    subtle:
      'bg-[color:var(--guru-accent,#1e90ff)]/10 text-[color:var(--guru-accent,#1e90ff)]',
    success: 'bg-[#10b981] text-white',
    warning: 'bg-[#f59e0b] text-[#0b0b0b]',
    danger: 'bg-[#ef4444] text-white'
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}


