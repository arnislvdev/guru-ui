import { ButtonCore, type ButtonCoreOptions } from '../core/ButtonCore'

export interface ButtonOptions extends ButtonCoreOptions {
  text?: string
  iconLeft?: string
  iconRight?: string
  onClick?: (event: MouseEvent) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
}

export class GuruButton {
  private element: HTMLButtonElement
  private options: ButtonOptions

  constructor(options: ButtonOptions = {}) {
    this.options = {
      variant: 'primary',
      size: 'md',
      disabled: false,
      loading: false,
      type: 'button',
      fullWidth: false,
      rounded: false,
      text: '',
      ...options
    }

    this.element = this.createButton()
    this.setupEventListeners()
  }

  private createButton(): HTMLButtonElement {
    const button = document.createElement('button')
    
    button.type = this.options.type!
    button.disabled = this.options.disabled!
    button.className = this.getButtonClasses()
    
    // Add icon left
    if (this.options.iconLeft) {
      const iconLeft = document.createElement('span')
      iconLeft.innerHTML = this.options.iconLeft
      iconLeft.className = 'mr-2'
      button.appendChild(iconLeft)
    }

    // Add text content
    if (this.options.text) {
      const text = document.createElement('span')
      text.textContent = this.options.text
      text.className = 'button-content'
      button.appendChild(text)
    }

    // Add icon right
    if (this.options.iconRight) {
      const iconRight = document.createElement('span')
      iconRight.innerHTML = this.options.iconRight
      iconRight.className = 'ml-2'
      button.appendChild(iconRight)
    }

    return button
  }

  private getButtonClasses(): string {
    return ButtonCore.getClasses(this.options)
  }

  private setupEventListeners(): void {
    if (this.options.onClick) {
      this.element.addEventListener('click', (e) => {
        if (!this.options.disabled && !this.options.loading) {
          this.options.onClick!(e)
        }
      })
    }

    if (this.options.onFocus) {
      this.element.addEventListener('focus', this.options.onFocus)
    }

    if (this.options.onBlur) {
      this.element.addEventListener('blur', this.options.onBlur)
    }
  }

  // Public methods
  public mount(container: HTMLElement): void {
    container.appendChild(this.element)
  }

  public unmount(): void {
    this.element.remove()
  }

  public setText(text: string): void {
    const textElement = this.element.querySelector('.button-content')
    if (textElement) {
      textElement.textContent = text
    }
  }

  public setDisabled(disabled: boolean): void {
    this.options.disabled = disabled
    this.element.disabled = disabled
  }

  public setLoading(loading: boolean): void {
    this.options.loading = loading
    if (loading) {
      this.element.disabled = true
      this.element.innerHTML = '<span class="animate-spin mr-2">⏳</span>Loading...'
    } else {
      this.element.disabled = this.options.disabled!
      this.createButton() // Recreate with original content
    }
  }

  public getElement(): HTMLButtonElement {
    return this.element
  }

  public destroy(): void {
    this.unmount()
  }
}

// Factory function for easier usage
export function createButton(options: ButtonOptions): GuruButton {
  return new GuruButton(options)
}

// Auto-initialize buttons with data attributes
export function initializeButtons(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-guru-button]')
    
    buttons.forEach(buttonElement => {
      const button = buttonElement as HTMLElement
      const options: ButtonOptions = {
        text: button.getAttribute('data-text') || '',
        variant: (button.getAttribute('data-variant') as any) || 'primary',
        size: (button.getAttribute('data-size') as any) || 'md',
        disabled: button.hasAttribute('data-disabled'),
        fullWidth: button.hasAttribute('data-full-width'),
        rounded: button.hasAttribute('data-rounded'),
        onClick: (e) => {
          // Trigger custom event
          button.dispatchEvent(new CustomEvent('guru-button-click', { detail: e }))
        }
      }

      const guruButton = new GuruButton(options)
      guruButton.mount(button)
    })
  })
}
