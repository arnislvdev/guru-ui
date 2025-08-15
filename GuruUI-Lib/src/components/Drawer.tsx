import * as React from 'react'
import { cn } from '../utils/cn'

export type DrawerProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
  children: React.ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({ open: openProp, onOpenChange, side = 'right', className = '', children }) => {
  const [internal, setInternal] = React.useState(false)
  const open = openProp ?? internal

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setInternal(false)
        onOpenChange?.(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onOpenChange])

  const close = () => { setInternal(false); onOpenChange?.(false) }

  const pos = side === 'left'
    ? 'left-0 top-0 h-full w-80 -translate-x-full'
    : side === 'right'
      ? 'right-0 top-0 h-full w-80 translate-x-full'
      : side === 'top'
        ? 'top-0 left-0 w-full h-80 -translate-y-full'
        : 'bottom-0 left-0 w-full h-80 translate-y-full'
  const posOpen = side === 'left'
    ? 'translate-x-0'
    : side === 'right'
      ? 'translate-x-0'
      : side === 'top'
        ? 'translate-y-0'
        : 'translate-y-0'

  return open ? (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className={cn('absolute transform bg-[color:var(--arnis-background,#121212)] border border-white/10 shadow-2xl transition-transform duration-200', pos, posOpen, className)}>
        {children}
      </div>
    </div>
  ) : null
}

Drawer.displayName = 'Drawer'


