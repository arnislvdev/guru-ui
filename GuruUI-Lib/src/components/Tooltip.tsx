import * as React from 'react'
import { cn } from '../utils/cn'

export type TooltipProps = {
  content: React.ReactNode
  placement?: 'top' | 'right' | 'bottom' | 'left'
  children: React.ReactNode
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ content, placement = 'top', children, className = '' }) => {
  const id = React.useId()
  const pos =
    placement === 'top'
      ? 'bottom-full left-1/2 -translate-x-1/2 mb-2'
      : placement === 'bottom'
      ? 'top-full left-1/2 -translate-x-1/2 mt-2'
      : placement === 'left'
      ? 'right-full top-1/2 -translate-y-1/2 mr-2'
      : 'left-full top-1/2 -translate-y-1/2 ml-2'
  const origin =
    placement === 'top'
      ? 'origin-bottom'
      : placement === 'bottom'
      ? 'origin-top'
      : placement === 'left'
      ? 'origin-right'
      : 'origin-left'

  return (
    <span className={cn('relative inline-flex group', className)}>
      <span aria-describedby={id} className="inline-flex">
        {children}
      </span>
      <span
        id={id}
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-40 rounded-md border border-white/10 bg-[color:var(--arnis-background,#121212)] px-2 py-1 text-xs text-[color:var(--arnis-heading,#ffffff)] opacity-0 shadow-lg transition-all duration-150 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 will-change-[transform,opacity]',
          pos,
          origin
        )}
      >
        {content}
      </span>
    </span>
  )
}

Tooltip.displayName = 'Tooltip'


