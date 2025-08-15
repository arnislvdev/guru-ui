import * as React from 'react'
import { cn } from '../utils/cn'

export type ColorPickerProps = {
  value?: string
  onChange?: (hex: string) => void
  label?: React.ReactNode
  className?: string
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value = '#ffffff', onChange, label, className = '' }) => {
  const [hex, setHex] = React.useState(value)

  React.useEffect(() => setHex(value), [value])

  const handleHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setHex(v)
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) onChange?.(v)
  }

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setHex(v)
    onChange?.(v)
  }

  return (
    <div className={cn('space-y-2', className)}>
      {label && <div className="text-sm text-[color:var(--arnis-body,#b3b3b3)]">{label}</div>}
      <div className="flex items-center gap-3">
        <input type="color" value={hex} onChange={handleColor} className="h-10 w-10 rounded border border-white/10 bg-transparent p-0" />
        <input
          type="text"
          value={hex}
          onChange={handleHex}
          placeholder="#ffffff"
          className="w-28 rounded-md bg-white/5 px-3 py-2 text-sm border border-white/10 outline-none focus:ring-2 focus:ring-[color:var(--arnis-accent,#ffffff)]/60"
        />
        <div className="flex items-center gap-2 text-xs text-[color:var(--arnis-body,#b3b3b3)]">
          <span className="inline-block h-5 w-5 rounded border border-white/10" style={{ background: hex }} />
          <span>{hex.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

ColorPicker.displayName = 'ColorPicker'


