import { ClassValue } from 'clsx';

declare interface ButtonCoreOptions {
    variant?: ComponentVariant;
    size?: ComponentSize;
    disabled?: boolean;
    loading?: boolean;
    iconOnly?: boolean;
    fullWidth?: boolean;
}

export declare interface ButtonOptions extends ButtonCoreOptions {
    text?: string;
    iconLeft?: string;
    iconRight?: string;
    onClick?: (event: MouseEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}

/**
 * Optimized utility for merging Tailwind classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export declare function cn(...inputs: ClassValue[]): string;

export declare type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

export declare type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export declare function createButton(options: ButtonOptions): GuruButton;

export declare function createModal(options: ModalOptions): GuruModal;

export declare function generateId(prefix?: string): string;

/**
 * Focus trap utility for modals and overlays
 */
export declare function getFocusableElements(container: HTMLElement): HTMLElement[];

export declare class GuruButton {
    private element;
    private options;
    constructor(options?: ButtonOptions);
    private createButton;
    private getButtonClasses;
    private setupEventListeners;
    mount(container: HTMLElement): void;
    unmount(): void;
    setText(text: string): void;
    setDisabled(disabled: boolean): void;
    setLoading(loading: boolean): void;
    getElement(): HTMLButtonElement;
    destroy(): void;
}

export declare class GuruModal {
    private element;
    private backdrop;
    private content;
    private options;
    private isOpen;
    constructor(options?: ModalOptions);
    private createModal;
    private createBackdrop;
    private createContent;
    private setupEventListeners;
    open(): void;
    close(): void;
    setContent(content: string | HTMLElement): void;
    setTitle(title: string): void;
    isModalOpen(): boolean;
    destroy(): void;
}

export declare function initializeAllComponents(): void;

export declare function initializeButtons(): void;

export declare function initializeModals(): void;

declare interface ModalCoreOptions {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    centered?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    backdrop?: boolean;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
}

export declare interface ModalOptions extends ModalCoreOptions {
    title?: string;
    content?: string | HTMLElement;
    onClose?: () => void;
    onOpen?: () => void;
}

export declare type StatusVariant = 'info' | 'success' | 'warning' | 'error';

export { }
