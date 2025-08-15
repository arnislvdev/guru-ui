import * as React from 'react'
import { cn } from '../utils/cn'
import { Popover } from './Popover'
import { Dropdown } from './Dropdown'

export type DatePickerProps = {
  value?: Date | null
  onChange?: (value: Date | null) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  yearRange?: [number, number]
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function startOfMonth(year: number, month: number) {
  return new Date(year, month, 1)
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, placeholder = 'Select date', disabled, yearRange = [1970, 2100] }) => {
  const [open, setOpen] = React.useState(false)
  const today = new Date()
  const [cursor, setCursor] = React.useState<Date>(value ?? today)
  const year = cursor.getFullYear()
  const month = cursor.getMonth()
  const first = startOfMonth(year, month)
  const firstWeekday = first.getDay() // 0-6
  const days = getDaysInMonth(year, month)

  const commit = (d: number) => {
    const next = new Date(year, month, d)
    onChange?.(next)
    setOpen(false)
  }

  const label = value ? value.toLocaleDateString() : ''

  const grid: (number | null)[] = Array(firstWeekday).fill(null).concat(Array.from({ length: days }, (_, i) => i + 1))
  while (grid.length % 7 !== 0) grid.push(null)

  return (
    <Popover open={open} onOpenChange={setOpen} align="start" trigger={
      <button
        type="button"
        disabled={disabled}
        className={cn('w-full rounded-[var(--guru-radius,0.5rem)] border border-white/15 bg-white/5 px-3 py-2 text-left', disabled && 'opacity-60')}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={cn('text-[color:var(--guru-heading,#ffffff)]', !label && 'text-[color:var(--guru-body,#b3b3b3)]')}>{label || placeholder}</span>
      </button>
    }>
      <div className="w-[18rem]">
        <div className="flex items-center justify-between gap-2 px-2 py-2">
          <button className="px-2 py-1 hover:bg-white/10 rounded" onClick={() => setCursor(new Date(year, month - 1, 1))}>‹</button>
          <Dropdown
            className="text-sm"
            value={String(month)}
            onChange={(v) => setCursor(new Date(year, Number(v), 1))}
            options={Array.from({ length: 12 }, (_, m) => ({ value: String(m), label: new Date(2000, m, 1).toLocaleString(undefined, { month: 'long' }) }))}
          />
          <Dropdown
            className="text-sm"
            value={String(year)}
            onChange={(v) => setCursor(new Date(Number(v), month, 1))}
            options={Array.from({ length: yearRange[1] - yearRange[0] + 1 }, (_, i) => ({ value: String(yearRange[0] + i), label: String(yearRange[0] + i) }))}
          />
          <button className="px-2 py-1 hover:bg-white/10 rounded" onClick={() => setCursor(new Date(year, month + 1, 1))}>›</button>
        </div>
        <div className="grid grid-cols-7 gap-1 px-2 pb-2 text-center text-xs text-[color:var(--guru-body,#b3b3b3)]">
          {['Su','Mo','Tu','We','Th','Fr','Sa'].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 px-2 pb-3">
          {grid.map((d, i) => {
            const isDay = typeof d === 'number'
            const isToday = isDay && year === today.getFullYear() && month === today.getMonth() && d === today.getDate()
            const isSelected = isDay && value !== null && value !== undefined && year === (value as Date).getFullYear() && month === (value as Date).getMonth() && d === (value as Date).getDate()
            return (
              <button
                key={i}
                disabled={!isDay}
                onClick={() => isDay && commit(d as number)}
                className={cn(
                  'h-8 rounded text-sm hover:bg-white/10 disabled:opacity-0',
                  isSelected && 'bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-on-accent,#0b0b0b)]',
                  !isSelected && 'text-[color:var(--guru-heading,#ffffff)]',
                  isToday && !isSelected && 'ring-1 ring-[color:var(--guru-accent,#ffffff)]/50'
                )}
              >
                {isDay ? d : ''}
              </button>
            )
          })}
        </div>
      </div>
    </Popover>
  )
}

DatePicker.displayName = 'DatePicker'


