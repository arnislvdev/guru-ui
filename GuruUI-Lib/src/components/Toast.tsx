import * as React from 'react'
import { cn } from '../utils/cn'

export type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger'
  durationMs?: number
}

type ToastContextType = {
  toasts: Toast[]
  show: (toast: Omit<Toast, 'id'>) => string
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

export type ToastProviderProps = {
  children: React.ReactNode
  max?: number
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, max = 5, position = 'top-right' }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const show: ToastContextType['show'] = ({ title, description, variant = 'default', durationMs = 3000 }) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => {
      const next = [...t, { id, title, description, variant, durationMs }]
      return next.slice(-max)
    })
    if (durationMs > 0) {
      setTimeout(() => dismiss(id), durationMs)
    }
    return id
  }

  const dismiss: ToastContextType['dismiss'] = (id) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }

  const posCls =
    position === 'top-right'
      ? 'top-4 right-4'
      : position === 'top-left'
      ? 'top-4 left-4'
      : position === 'bottom-right'
      ? 'bottom-4 right-4'
      : 'bottom-4 left-4'

  return (
    <ToastContext.Provider value={{ toasts, show, dismiss }}>
      {children}
      <div className={cn('pointer-events-none fixed z-[100] space-y-3', posCls)}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              'pointer-events-auto min-w-[18rem] rounded-lg border px-4 py-3 shadow-lg animate-scale-in',
              'bg-[color:var(--arnis-background,#121212)] border-white/10',
              t.variant === 'success' && 'border-emerald-400/40',
              t.variant === 'warning' && 'border-amber-400/40',
              t.variant === 'danger' && 'border-rose-400/40'
            )}
          >
            {t.title && <div className="font-semibold text-[color:var(--arnis-heading,#ffffff)]">{t.title}</div>}
            {t.description && (
              <div className="mt-1 text-sm text-[color:var(--arnis-body,#b3b3b3)]">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}


