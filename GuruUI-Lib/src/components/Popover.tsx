import * as React from 'react'
import { cn } from '../utils/cn'

export type PopoverProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger: React.ReactNode
  children: React.ReactNode | ((close: () => void) => React.ReactNode)
  className?: string
  align?: 'start' | 'center' | 'end'
  animated?: boolean
}

export const Popover: React.FC<PopoverProps> = ({
  open: openProp,
  onOpenChange,
  trigger,
  children,
  className = '',
  align = 'center',
  animated = true
}) => {
  const [internal, setInternal] = React.useState(false)
  const open = openProp ?? internal
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) {
        setInternal(false)
        onOpenChange?.(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open, onOpenChange])

  const handleToggle = () => {
    const next = !open
    setInternal(next)
    onOpenChange?.(next)
  }

  const alignCls = align === 'start' ? 'left-0' : align === 'end' ? 'right-0' : 'left-1/2 -translate-x-1/2'

  return (
    <div className={cn('relative inline-block', className)} ref={ref}>
      <div onClick={handleToggle} className="inline-flex cursor-pointer select-none">
        {trigger}
      </div>
      {open && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[12rem] rounded-lg border border-white/10 bg-[color:var(--arnis-background,#121212)] p-3 shadow-xl',
            alignCls,
            animated && 'animate-scale-in'
          )}
        >
          {typeof children === 'function' ? (children(() => { setInternal(false); onOpenChange?.(false) })) : children}
        </div>
      )}
    </div>
  )
}

Popover.displayName = 'Popover'


