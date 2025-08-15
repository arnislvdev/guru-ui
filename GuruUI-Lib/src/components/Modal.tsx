import * as React from 'react'
import { ModalCore, type ModalCoreOptions } from '../core/ModalCore'

export type ModalProps = ModalCoreOptions & {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
  initialFocusRef?: React.RefObject<HTMLElement>
}

export const Modal: React.FC<ModalProps> = ({ 
  open, 
  onClose, 
  title, 
  children, 
  initialFocusRef,
  size = 'md',
  centered = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  backdrop = true,
  animation = 'fade'
}) => {
  const escHandler = React.useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') onClose()
    },
    [onClose, closeOnEscape]
  )

  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', escHandler)
    return () => document.removeEventListener('keydown', escHandler)
  }, [open, escHandler])

  React.useEffect(() => {
    if (!open) return
    const node = containerRef.current
    if (!node) return
    const focusable = node.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = initialFocusRef?.current ?? focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (focusable.length === 0) return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          ;(last as HTMLElement)?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          ;(first as HTMLElement)?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [open, initialFocusRef])

  if (!open) return null

  const modalOptions = { size, centered, animation }
  const accessibilityProps = ModalCore.getAccessibilityProps(modalOptions)

  return (
    <div
      className={ModalCore.getClasses(modalOptions)}
      {...accessibilityProps}
    >
      {backdrop && (
        <div 
          className={ModalCore.getBackdropClasses(modalOptions)} 
          onClick={closeOnOverlayClick ? onClose : undefined} 
        />
      )}
      <div ref={containerRef} className={ModalCore.getContentClasses(modalOptions)}>
        {title && (
          <div className={ModalCore.getHeaderClasses()}>
            <h2 className="text-lg font-semibold text-[color:var(--arnis-heading,#ffffff)]" id="arnis-ux-modal-title">
              {title}
            </h2>
            {showCloseButton && (
              <button
                className={ModalCore.getCloseButtonClasses()}
                onClick={onClose}
                aria-label="Close modal"
              >
                ✕
              </button>
            )}
          </div>
        )}
        <div className={ModalCore.getBodyClasses()}>{children}</div>
        <div className={ModalCore.getFooterClasses()}>
          <button
            className="inline-flex items-center justify-center rounded-[var(--arnis-radius,0.5rem)] bg-[color:var(--arnis-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--arnis-on-accent,#0b0b0b)] hover:bg-[color:var(--arnis-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--arnis-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--arnis-background,#121212)]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}


