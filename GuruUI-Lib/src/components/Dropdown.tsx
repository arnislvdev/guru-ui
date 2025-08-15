import * as React from 'react'
import { cn } from '../utils/cn'
import { Popover } from './Popover'

export type DropdownOption = {
  value: string
  label?: React.ReactNode
}

export type DropdownProps = {
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  align?: 'start' | 'center' | 'end'
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  disabled,
  className = '',
  align = 'start'
}) => {
  const selected = options.find(o => o.value === value)
  const label = selected ? (selected.label ?? selected.value) : placeholder
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen} align={align} trigger={
      <button
        type="button"
        disabled={disabled}
        className={cn('inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1 text-sm text-[color:var(--arnis-heading,#ffffff)] hover:bg-white/10 disabled:opacity-60', className)}
        onClick={() => setOpen(o => !o)}
      >
        <span className={cn(!selected && 'text-[color:var(--arnis-body,#b3b3b3)]')}>{label}</span>
        <span className="opacity-70">▾</span>
      </button>
    }>
      {(close) => (
        <div className="min-w-[8rem] max-h-64 overflow-auto">
          {options.map(opt => (
            <button
              key={opt.value}
              className={cn('flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-white/10', value === opt.value ? 'text-[color:var(--arnis-accent,#ffffff)]' : 'text-[color:var(--arnis-heading,#ffffff)]')}
              onClick={() => { onChange?.(opt.value); close() }}
            >
              <span>{opt.label ?? opt.value}</span>
              {value === opt.value && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </Popover>
  )
}

Dropdown.displayName = 'Dropdown'


