import * as React from 'react'
import { cn } from '../utils/cn'
import { Popover } from './Popover'

export type ComboboxOption = {
  value: string
  label?: React.ReactNode
}

export type ComboboxProps = {
  options: ComboboxOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  clearable?: boolean
  filter?: (option: ComboboxOption, query: string) => boolean
  multiple?: boolean
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  disabled,
  className = '',
  clearable = false,
  filter,
  multiple = false
}) => {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState<number>(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)

  const baseFilter = React.useCallback((opt: ComboboxOption, q: string) => {
    const text = (typeof opt.label === 'string' ? opt.label : '') + ' ' + opt.value
    return text.toLowerCase().includes(q.toLowerCase())
  }, [])

  const filtered = (filter ? options.filter((o) => filter(o, query)) : options.filter((o) => baseFilter(o, query)))

  const selected = Array.isArray(value) ? options.filter(o => value.includes(o.value)) : options.find((o) => o.value === value)

  const commit = (v: string) => {
    if (multiple) {
      const prev = Array.isArray(value) ? value : []
      const exists = prev.includes(v)
      const next = exists ? prev.filter(x => x !== v) : [...prev, v]
      onChange?.(next)
    } else {
      onChange?.(v)
    }
    setOpen(false)
    setQuery('')
    setActiveIndex(-1)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      return
    }
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const option = filtered[activeIndex]
      if (option) commit(option.value)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    if (activeIndex < 0) return
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  return (
    <Popover open={open} onOpenChange={setOpen} align="start" trigger={
      <div className={cn('w-full', className)}>
        <div className={cn('flex items-center gap-2 rounded-[var(--arnis-radius,0.5rem)] border border-white/15 bg-white/5 px-3 py-2', disabled && 'opacity-60 cursor-not-allowed')}
             onClick={() => !disabled && setOpen((o) => !o)}>
          <input
            ref={inputRef}
            placeholder={selected ? '' : placeholder}
            value={open ? query : (Array.isArray(selected) ? selected.map(s => (typeof s.label === 'string' ? s.label : s.value)).join(', ') : (selected ? (typeof (selected as any).label === 'string' ? (selected as any).label : (selected as any).value) : ''))}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onKeyDown={onKeyDown}
            disabled={disabled}
            className="flex-1 bg-transparent text-[color:var(--arnis-heading,#ffffff)] placeholder:text-[color:var(--arnis-body,#b3b3b3)] focus:outline-none"
          />
          {clearable && selected && (
            <button
              type="button"
              className="text-sm text-[color:var(--arnis-body,#b3b3b3)] hover:text-[color:var(--arnis-heading,#ffffff)]"
              onClick={(e) => { e.stopPropagation(); multiple ? onChange?.([]) : onChange?.('') }}
            >
              Clear
            </button>
          )}
          <span className="text-[color:var(--arnis-body,#b3b3b3)]">▾</span>
        </div>
      </div>
    }>
      {(close) => (
        <div ref={listRef} className="max-h-64 w-full overflow-auto">
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-sm text-[color:var(--arnis-body,#b3b3b3)]">No results</div>
          )}
          {filtered.map((opt, idx) => {
            const isActive = idx === activeIndex
            const isSelected = Array.isArray(value) ? value.includes(opt.value) : opt.value === value
            return (
              <button
                key={opt.value}
                data-index={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => { commit(opt.value); if (!multiple) close() }}
                className={cn('flex w-full items-center justify-between px-3 py-2 text-left text-sm',
                  isActive ? 'bg-white/10' : 'hover:bg-white/5',
                  isSelected ? 'text-[color:var(--arnis-accent,#ffffff)]' : 'text-[color:var(--arnis-heading,#ffffff)]')}
              >
                <span>{opt.label ?? opt.value}</span>
                {isSelected && <span>✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </Popover>
  )
}

Combobox.displayName = 'Combobox'


