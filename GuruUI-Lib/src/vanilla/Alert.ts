import { AlertCore, type AlertCoreOptions } from '../core/AlertCore'

export interface AlertOptions extends AlertCoreOptions {
  title?: string
  content?: string
  onDismiss?: () => void
}

export class ArnisAlert {
  private element: HTMLDivElement
  private options: AlertOptions

  constructor(options: AlertOptions = {}) {
    this.options = {
      ...AlertCore.getDefaultOptions(),
      ...options
    }

    this.element = this.createAlert()
  }

  private createAlert(): HTMLDivElement {
    const alert = document.createElement('div')
    alert.className = AlertCore.getClasses(this.options)
    
    // Icon
    if (this.options.icon) {
      const icon = document.createElement('span')
      icon.className = AlertCore.getIconClasses(this.options)
      icon.textContent = this.getIconForVariant(this.options.variant!)
      alert.appendChild(icon)
    }

    // Content
    const content = document.createElement('div')
    content.className = AlertCore.getContentClasses()
    
    if (this.options.title) {
      const title = document.createElement('div')
      title.className = AlertCore.getTitleClasses()
      title.textContent = this.options.title
      content.appendChild(title)
    }
    
    if (this.options.content) {
      const description = document.createElement('div')
      description.className = AlertCore.getDescriptionClasses()
      description.textContent = this.options.content
      content.appendChild(description)
    }
    
    alert.appendChild(content)

    // Dismiss button
    if (this.options.dismissible && this.options.onDismiss) {
      const dismissBtn = document.createElement('button')
      dismissBtn.className = AlertCore.getDismissButtonClasses(this.options)
      dismissBtn.setAttribute('aria-label', 'Dismiss alert')
      dismissBtn.textContent = '✕'
      dismissBtn.addEventListener('click', () => this.dismiss())
      
      alert.appendChild(dismissBtn)
    }

    return alert
  }

  private getIconForVariant(variant: string): string {
    const icons = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    }
    return icons[variant as keyof typeof icons] || icons.info
  }

  public mount(container: HTMLElement): void {
    container.appendChild(this.element)
  }

  public unmount(): void {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element)
    }
  }

  public setContent(content: string): void {
    this.options.content = content
    const description = this.element.querySelector(`.${AlertCore.getDescriptionClasses().split(' ')[0]}`)
    if (description) {
      description.textContent = content
    }
  }

  public setTitle(title: string): void {
    this.options.title = title
    const titleElement = this.element.querySelector(`.${AlertCore.getTitleClasses().split(' ')[0]}`)
    if (titleElement) {
      titleElement.textContent = title
    }
  }

  public setVariant(variant: string): void {
    this.options.variant = variant as any
    this.element.className = AlertCore.getClasses(this.options)
    
    // Update icon
    const icon = this.element.querySelector(`.${AlertCore.getIconClasses(this.options).split(' ')[0]}`)
    if (icon) {
      icon.textContent = this.getIconForVariant(variant)
    }
  }

  public dismiss(): void {
    this.options.onDismiss?.()
    this.unmount()
  }

  public getElement(): HTMLDivElement {
    return this.element
  }

  public destroy(): void {
    this.unmount()
  }
}

// Factory function
export function createAlert(options: AlertOptions): ArnisAlert {
  return new ArnisAlert(options)
}

// Auto-initialize alerts with data attributes
export function initializeAlerts(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const alerts = document.querySelectorAll('[data-arnis-alert]')
    
    alerts.forEach(alertElement => {
      const alert = alertElement as HTMLElement
      const options: AlertOptions = {
        title: alert.getAttribute('data-title') || '',
        content: alert.getAttribute('data-content') || '',
        variant: (alert.getAttribute('data-variant') as any) || 'info',
        size: (alert.getAttribute('data-size') as any) || 'md',
        dismissible: alert.hasAttribute('data-dismissible'),
        icon: alert.hasAttribute('data-icon'),
        border: alert.hasAttribute('data-border'),
        rounded: alert.hasAttribute('data-rounded'),
        onDismiss: () => {
          alert.dispatchEvent(new CustomEvent('arnis-alert-dismiss'))
        }
      }

      const arnisAlert = new ArnisAlert(options)
      arnisAlert.mount(alert)
      
      // Store reference
      ;(alert as any).arnisAlert = arnisAlert
    })
  })
}
