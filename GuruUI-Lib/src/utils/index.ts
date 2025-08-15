// Re-export main utilities
export { cn, cx } from './cn'

// Optimization utilities
export const isServer = typeof window === 'undefined'
export const isBrowser = !isServer

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Optimized event listener with cleanup
 */
export function useEventListener(
  target: EventTarget | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
) {
  if (!target) return () => {}
  
  target.addEventListener(event, handler, options)
  return () => target.removeEventListener(event, handler, options)
}

/**
 * Generate unique IDs for accessibility
 */
let idCounter = 0
export function generateId(prefix = 'guru'): string {
  return `${prefix}-${++idCounter}-${Date.now().toString(36)}`
}

/**
 * Focus trap utility for modals and overlays
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ')
  
  return Array.from(container.querySelectorAll(selector))
}

/**
 * Safe JSON parsing with fallback
 */
export function safeJsonParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str)
  } catch {
    return fallback
  }
}

/**
 * Check if an element is visible in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  if (!isBrowser) return false
  
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  )
}