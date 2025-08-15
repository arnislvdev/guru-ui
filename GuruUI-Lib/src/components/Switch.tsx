import * as React from 'react'
import { Toggle } from './Toggle'

export type SwitchProps = {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
  size?: 'sm' | 'md'
  className?: string
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onCheckedChange, label, description, disabled, size = 'md', className = '' }, ref) => {
    const gap = size === 'sm' ? 'gap-2' : 'gap-3'
    return (
      <label className={`inline-flex items-center ${gap} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}>
        <Toggle ref={ref} pressed={checked || false} onPressedChange={onCheckedChange || (() => {})} disabled={disabled || false} size={size} className={className} />
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

Switch.displayName = 'Switch'


