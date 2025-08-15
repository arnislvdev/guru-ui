import * as React from 'react'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  helperText?: string
  error?: string
  fullWidth?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, className = '', id, fullWidth = true, ...props }, ref) => {
    const generatedId = React.useId()
    const textareaId = id ?? generatedId
    const describedById = error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label ? (
          <label htmlFor={textareaId} className="mb-1 block text-xs font-medium text-[color:var(--guru-body,#b3b3b3)]">
            {label}
          </label>
        ) : null}
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedById}
          className={`block w-full rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#0f0f0f] text-[color:var(--guru-heading,#ffffff)] placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 px-3 py-2 text-sm ${className}`.trim()}
          {...props}
        />
        {error ? (
          <p id={`${textareaId}-error`} className="mt-1 text-xs text-[#ef4444]">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${textareaId}-helper`} className="mt-1 text-xs text-white/50">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'


