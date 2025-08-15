import * as React from 'react'
import { cn } from '../utils/cn'

export type AccordionItem = {
  id: string
  title: React.ReactNode
  content: React.ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  type = 'single',
  value,
  defaultValue = [],
  onValueChange,
  className = ''
}) => {
  const [internal, setInternal] = React.useState<string[]>(defaultValue)
  const current = value ?? internal

  const toggle = (id: string) => {
    let next: string[]
    const isOpen = current.includes(id)
    if (type === 'single') {
      next = isOpen ? [] : [id]
    } else {
      next = isOpen ? current.filter((x) => x !== id) : [...current, id]
    }
    setInternal(next)
    onValueChange?.(next)
  }

  return (
    <div className={cn('divide-y divide-white/10 rounded-lg border border-white/10', className)}>
      {items.map((item) => {
        const open = current.includes(item.id)
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={open}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white/5"
              onClick={() => toggle(item.id)}
            >
              <span className="font-medium text-[color:var(--arnis-heading,#ffffff)]">{item.title}</span>
              <span className="text-[color:var(--arnis-body,#b3b3b3)]">{open ? '−' : '+'}</span>
            </button>
            {open && (
              <div className="px-4 pb-4 text-[color:var(--arnis-body,#b3b3b3)]">{item.content}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

Accordion.displayName = 'Accordion'


