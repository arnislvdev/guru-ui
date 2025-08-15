import * as React from 'react'
import { cn } from '../utils/cn'

export type LoaderProps = {
  size?: 'sm' | 'md' | 'lg'
  label?: React.ReactNode
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({ size = 'md', label, className = '' }) => {
  const dims = size === 'sm' ? 'h-4 w-4 border-2' : size === 'lg' ? 'h-6 w-6 border-2' : 'h-5 w-5 border-2'
  return (
    <div className={cn('inline-flex items-center gap-3', className)} role="status" aria-live="polite" aria-busy="true">
      <span
        aria-hidden="true"
        className={cn(
          'inline-block rounded-full border-white/20 border-t-[color:var(--arnis-accent,#ffffff)] animate-spin',
          dims
        )}
        style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' } as React.CSSProperties}
      />
      {label && <span className="text-[color:var(--arnis-body,#b3b3b3)]">{label}</span>}
    </div>
  )
}

Loader.displayName = 'Loader'


