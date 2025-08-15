import * as React from 'react'

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  label?: React.ReactNode
  description?: React.ReactNode
  size?: 'sm' | 'md'
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', label, description, disabled, size = 'md', ...props }, ref) => {
    const ring = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'
    const dot = size === 'sm' ? 'h-2 w-2' : 'h-2.5 w-2.5'
    const gap = size === 'sm' ? 'gap-2' : 'gap-3'
    return (
      <label className={`group inline-flex items-start ${gap} select-none ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}>
        <span className={`relative inline-flex ${ring} flex-none`}>
          <input
            ref={ref}
            type="radio"
            disabled={disabled}
            className={`peer absolute inset-0 cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--arnis-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--arnis-background,#121212)] checked:border-[color:var(--arnis-accent,#ffffff)] ${ring}`}
            {...props}
          />
          <span className={`pointer-events-none absolute inset-0 m-auto rounded-full bg-[color:var(--arnis-accent,#ffffff)] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${dot}`} />
        </span>
        {(label || description) && (
          <span className="leading-snug">
            {label && <span className="block text-[color:var(--arnis-heading,#ffffff)]">{label}</span>}
            {description && <span className="block text-sm text-[color:var(--arnis-body,#b3b3b3)]">{description}</span>}
          </span>
        )}
      </label>
    )
  }
)

Radio.displayName = 'Radio'


