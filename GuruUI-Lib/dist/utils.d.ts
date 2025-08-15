import { ClassValue } from 'clsx';

/**
 * Optimized utility for merging Tailwind classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export declare function cn(...inputs: ClassValue[]): string;

/**
 * Simple class concatenation without merge logic for performance-critical paths
 */
export declare function cx(...classes: (string | false | null | undefined)[]): string;

/**
 * Debounce function for performance optimization
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;

export declare function generateId(prefix?: string): string;

/**
 * Focus trap utility for modals and overlays
 */
export declare function getFocusableElements(container: HTMLElement): HTMLElement[];

export declare const isBrowser: boolean;

/**
 * Check if an element is visible in viewport
 */
export declare function isInViewport(element: HTMLElement): boolean;

export declare const isServer: boolean;

/**
 * Safe JSON parsing with fallback
 */
export declare function safeJsonParse<T>(str: string, fallback: T): T;

/**
 * Optimized event listener with cleanup
 */
export declare function useEventListener(target: EventTarget | null, event: string, handler: EventListener, options?: AddEventListenerOptions): () => void;

export { }
