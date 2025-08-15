import * as React from 'react'
import { Popover } from './Popover'
import { cn } from '../utils/cn'

export type MenuItem = {
  label: React.ReactNode
  onSelect?: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

export type MenuProps = {
  trigger: React.ReactNode
  items: MenuItem[]
  className?: string
  align?: 'start' | 'center' | 'end'
}

export const Menu: React.FC<MenuProps> = ({ trigger, items, className = '', align = 'start' }) => {
  return (
    <Popover align={align} trigger={trigger}>
      {(close) => (
        <ul className={cn('min-w-[12rem] divide-y divide-white/5', className)}>
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                className={cn(
                  'flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-[color:var(--guru-heading,#ffffff)] hover:bg-white/5',
                  item.disabled && 'opacity-60 cursor-not-allowed'
                )}
                onClick={() => {
                  if (item.disabled) return
                  item.onSelect?.()
                  close()
                }}
              >
                {item.icon && <span className="inline-flex h-4 w-4 items-center justify-center">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Popover>
  )
}

Menu.displayName = 'Menu'


