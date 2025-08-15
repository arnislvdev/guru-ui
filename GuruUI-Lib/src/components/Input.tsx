import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      size = 'md',
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const describedById = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
    const sizes: Record<typeof size, string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-3.5 text-sm',
      lg: 'h-12 px-4 text-base'
    }
    const leftPad = leftIcon ? 'pl-9' : ''
    const rightPad = rightIcon ? 'pr-9' : ''
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label ? (
          <label htmlFor={inputId} className="mb-1 block text-xs font-medium text-[color:var(--guru-body,#b3b3b3)]">
            {label}
          </label>
        ) : null}
        <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
          {leftIcon ? (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/60">
              {leftIcon}
            </span>
          ) : null}
          <input
            id={inputId}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={describedById}
            className={`block w-full rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#0f0f0f] text-[color:var(--guru-heading,#ffffff)] placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 ${sizes[size]} ${leftPad} ${rightPad} ${className}`.trim()}
            {...props}
          />
          {rightIcon ? (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/60">
              {rightIcon}
            </span>
          ) : null}
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-[#ef4444]">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="mt-1 text-xs text-white/50">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'


