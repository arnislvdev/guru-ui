import { ModalCore, type ModalCoreOptions } from '../core/ModalCore'

export interface ModalOptions extends ModalCoreOptions {
  title?: string
  content?: string | HTMLElement
  onClose?: () => void
  onOpen?: () => void
}

export class ArnisModal {
  private element: HTMLDivElement
  private backdrop: HTMLDivElement
  private content: HTMLDivElement
  private options: ModalOptions
  private isOpen = false

  constructor(options: ModalOptions = {}) {
    this.options = {
      ...ModalCore.getDefaultOptions(),
      ...options
    }

    this.element = this.createModal()
    this.backdrop = this.createBackdrop()
    this.content = this.createContent()
    
    this.setupEventListeners()
  }

  private createModal(): HTMLDivElement {
    const modal = document.createElement('div')
    modal.className = ModalCore.getClasses(this.options)
    return modal
  }

  private createBackdrop(): HTMLDivElement {
    const backdrop = document.createElement('div')
    backdrop.className = ModalCore.getBackdropClasses(this.options)
    return backdrop
  }

  private createContent(): HTMLDivElement {
    const content = document.createElement('div')
    content.className = ModalCore.getContentClasses(this.options)
    
    // Header
    if (this.options.title) {
      const header = document.createElement('div')
      header.className = ModalCore.getHeaderClasses()
      
      const title = document.createElement('h2')
      title.textContent = this.options.title
      title.className = 'text-lg font-semibold text-[color:var(--arnis-heading,#ffffff)]'
      
      header.appendChild(title)
      
      if (this.options.showCloseButton) {
        const closeBtn = document.createElement('button')
        closeBtn.className = ModalCore.getCloseButtonClasses()
        closeBtn.textContent = '✕'
        closeBtn.setAttribute('aria-label', 'Close modal')
        closeBtn.addEventListener('click', () => this.close())
        
        header.appendChild(closeBtn)
      }
      
      content.appendChild(header)
    }

    // Body
    const body = document.createElement('div')
    body.className = ModalCore.getBodyClasses()
    
    if (typeof this.options.content === 'string') {
      body.textContent = this.options.content
    } else if (this.options.content) {
      body.appendChild(this.options.content)
    }
    
    content.appendChild(body)

    // Footer
    const footer = document.createElement('div')
    footer.className = ModalCore.getFooterClasses()
    
    const closeButton = document.createElement('button')
    closeButton.className = 'inline-flex items-center justify-center rounded-[var(--arnis-radius,0.5rem)] bg-[color:var(--arnis-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--arnis-on-accent,#0b0b0b)] hover:bg-[color:var(--arnis-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--arnis-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--arnis-background,#121212)]'
    closeButton.textContent = 'Close'
    closeButton.addEventListener('click', () => this.close())
    
    footer.appendChild(closeButton)
    content.appendChild(footer)

    return content
  }

  private setupEventListeners(): void {
    // Backdrop click
    if (this.options.closeOnOverlayClick) {
      this.backdrop.addEventListener('click', () => this.close())
    }

    // Escape key
    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close()
        }
      })
    }
  }

  public open(): void {
    if (this.isOpen) return
    
    this.isOpen = true
    document.body.appendChild(this.element)
    
    // Add backdrop
    if (this.options.backdrop) {
      document.body.appendChild(this.backdrop)
    }
    
    // Focus management
    const focusable = this.element.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusable.length > 0) {
      focusable[0]?.focus()
    }
    
    this.options.onOpen?.()
  }

  public close(): void {
    if (!this.isOpen) return
    
    this.isOpen = false
    
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element)
    }
    
    if (this.backdrop.parentNode) {
      this.backdrop.parentNode.removeChild(this.backdrop)
    }
    
    this.options.onClose?.()
  }

  public setContent(content: string | HTMLElement): void {
    this.options.content = content
    const body = this.content.querySelector(`.${ModalCore.getBodyClasses().split(' ')[0]}`)
    if (body) {
      body.innerHTML = ''
      if (typeof content === 'string') {
        body.textContent = content
      } else {
        body.appendChild(content)
      }
    }
  }

  public setTitle(title: string): void {
    this.options.title = title
    const header = this.content.querySelector(`.${ModalCore.getHeaderClasses().split(' ')[0]}`)
    if (header) {
      const titleElement = header.querySelector('h2')
      if (titleElement) {
        titleElement.textContent = title
      }
    }
  }

  public isModalOpen(): boolean {
    return this.isOpen
  }

  public destroy(): void {
    this.close()
  }
}

// Factory function
export function createModal(options: ModalOptions): ArnisModal {
  return new ArnisModal(options)
}

// Auto-initialize modals with data attributes
export function initializeModals(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('[data-arnis-modal]')
    
    modals.forEach(modalElement => {
      const modal = modalElement as HTMLElement
      const options: ModalOptions = {
        title: modal.getAttribute('data-title') || '',
        content: modal.getAttribute('data-content') || '',
        size: (modal.getAttribute('data-size') as any) || 'md',
        centered: modal.hasAttribute('data-centered'),
        closeOnOverlayClick: modal.hasAttribute('data-close-on-overlay'),
        closeOnEscape: modal.hasAttribute('data-close-on-escape'),
        showCloseButton: modal.hasAttribute('data-show-close'),
        backdrop: modal.hasAttribute('data-backdrop'),
        animation: (modal.getAttribute('data-animation') as any) || 'fade',
        onClose: () => {
          modal.dispatchEvent(new CustomEvent('arnis-modal-close'))
        }
      }

      const arnisModal = new ArnisModal(options)
      
      // Store reference
      ;(modal as any).arnisModal = arnisModal
      
      // Add open method
      ;(modal as any).openModal = () => arnisModal.open()
      ;(modal as any).closeModal = () => arnisModal.close()
    })
  })
}
