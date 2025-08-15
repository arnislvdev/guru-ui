import * as React from 'react'

export type Tab = { value: string; label: React.ReactNode; content: React.ReactNode }

export type TabsProps = {
  tabs: Tab[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Tabs: React.FC<TabsProps> = ({ tabs, value, defaultValue, onValueChange }) => {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState<string>(defaultValue ?? (tabs[0]?.value || ''))
  const active = isControlled ? (value as string) : internal
  const setActive = (v: string) => {
    if (!isControlled) setInternal(v)
    onValueChange?.(v)
  }

  const listRef = React.useRef<HTMLDivElement>(null)

  const onKeyDown = (e: React.KeyboardEvent) => {
    const items = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    if (!items || items.length === 0) return
    const currentIndex = Array.from(items).findIndex((el) => el.getAttribute('data-value') === active)
    let nextIndex = currentIndex
    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % items.length
    if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + items.length) % items.length
    if (e.key === 'Home') nextIndex = 0
    if (e.key === 'End') nextIndex = items.length - 1
    if (nextIndex !== currentIndex) {
      e.preventDefault()
      const next = items[nextIndex]
      if (next) {
        next.focus()
        setActive(next.getAttribute('data-value') || tabs[nextIndex]?.value || '')
      }
    }
  }

  return (
    <div>
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="horizontal"
        className="flex gap-2 border-b border-white/10"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t) => {
          const selected = t.value === active
          return (
            <button
              key={t.value}
              role="tab"
              data-value={t.value}
              aria-selected={selected}
              aria-controls={`panel-${t.value}`}
              id={`tab-${t.value}`}
              tabIndex={selected ? 0 : -1}
              className={`-mb-px rounded-t-md px-4 py-2 text-sm ${
                selected
                  ? 'border-b-2 border-[color:var(--arnis-accent,#1e90ff)] text-[color:var(--arnis-heading,#ffffff)]'
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setActive(t.value)}
            >
              {t.label}
            </button>
          )
        })}
      </div>
      {tabs.map((t) => {
        const selected = t.value === active
        return (
          <div
            key={t.value}
            role="tabpanel"
            id={`panel-${t.value}`}
            aria-labelledby={`tab-${t.value}`}
            hidden={!selected}
            className="pt-4"
          >
            {selected ? t.content : null}
          </div>
        )
      })}
    </div>
  )
}


