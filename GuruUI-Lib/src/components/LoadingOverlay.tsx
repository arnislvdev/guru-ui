import * as React from 'react'
import { Loader } from './Loader'
import { cn } from '../utils/cn'

export type LoadingOverlayProps = {
  open?: boolean
  label?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  blurBackground?: boolean
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  open = false,
  label = 'Loading...',
  size = 'md',
  className = '',
  blurBackground = true
}) => {
  if (!open) return null
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50',
        blurBackground && 'backdrop-blur-sm',
        className
      )}
      role="alertdialog"
      aria-live="assertive"
      aria-modal="true"
    >
      <div className="rounded-lg bg-[color:var(--guru-background,#121212)]/90 px-6 py-5 shadow-xl border border-white/10">
        <Loader size={size} label={label} />
      </div>
    </div>
  )
}

LoadingOverlay.displayName = 'LoadingOverlay'


