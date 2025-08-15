import { ClassValue } from 'clsx';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentSize as ComponentSize_2 } from '..';
import { ComponentVariant as ComponentVariant_2 } from '..';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import * as React_2 from 'react';

declare const __VLS_component: DefineComponent<ButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event: FocusEvent) => any;
click: (event: MouseEvent) => any;
focus: (event: FocusEvent) => any;
}, string, PublicProps, Readonly<ButtonProps> & Readonly<{
onBlur?: (event: FocusEvent) => any;
onClick?: (event: MouseEvent) => any;
onFocus?: (event: FocusEvent) => any;
}>, {
disabled: boolean;
variant: ComponentVariant_2;
size: ComponentSize_2;
loading: boolean;
fullWidth: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare const __VLS_component_2: DefineComponent<ModalProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => any;
"update:open": (value: boolean) => any;
}, string, PublicProps, Readonly<ModalProps> & Readonly<{
onClose?: () => any;
"onUpdate:open"?: (value: boolean) => any;
}>, {
size: "sm" | "md" | "lg" | "xl" | "full";
centered: boolean;
closeOnOverlayClick: boolean;
closeOnEscape: boolean;
showCloseButton: boolean;
backdrop: boolean;
animation: "fade" | "slide" | "scale" | "none";
}, {}, {}, {}, string, ComponentProvideOptions, false, {
containerRef: HTMLDivElement;
}, any>;

declare const __VLS_component_3: DefineComponent<AlertProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
dismiss: () => any;
}, string, PublicProps, Readonly<AlertProps> & Readonly<{
onDismiss?: () => any;
}>, {
variant: "info" | "success" | "warning" | "error";
size: "sm" | "md" | "lg";
border: boolean;
dismissible: boolean;
icon: boolean;
rounded: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'icon-left'?(_: {}): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        containerRef: HTMLDivElement;
    };
    rootEl: any;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const Alert: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

declare interface AlertCoreOptions {
    variant?: 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    icon?: boolean;
    border?: boolean;
    rounded?: boolean;
}

declare interface AlertProps extends AlertCoreOptions {
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
}

export declare const Avatar: DefineComponent<AvatarProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<AvatarProps> & Readonly<{}>, {
size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
status: "online" | "offline" | "away" | "busy";
shape: "circle" | "square" | "rounded";
ring: boolean;
ringColor: "accent" | "success" | "warning" | "danger";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare interface AvatarCoreOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    shape?: 'circle' | 'square' | 'rounded';
    status?: 'online' | 'offline' | 'away' | 'busy';
    ring?: boolean;
    ringColor?: 'accent' | 'success' | 'warning' | 'danger';
}

declare interface AvatarProps extends AvatarCoreOptions {
    src?: string;
    name?: string;
    fallback?: string;
}

export declare const Button: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

declare interface ButtonCoreOptions {
    variant?: ComponentVariant;
    size?: ComponentSize;
    disabled?: boolean;
    loading?: boolean;
    iconOnly?: boolean;
    fullWidth?: boolean;
}

declare interface ButtonProps extends ButtonCoreOptions {
}

export declare const Checkbox: DefineComponent<CheckboxProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: boolean) => any;
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<CheckboxProps> & Readonly<{
onChange?: (value: boolean) => any;
"onUpdate:modelValue"?: (value: boolean) => any;
}>, {
disabled: boolean;
variant: "default" | "error" | "success";
size: "sm" | "md" | "lg";
required: boolean;
indeterminate: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
inputRef: HTMLInputElement;
}, HTMLDivElement>;

declare interface CheckboxCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'error' | 'success';
    disabled?: boolean;
    indeterminate?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}

declare interface CheckboxProps extends CheckboxCoreOptions {
    modelValue?: boolean;
    label?: string;
    description?: string;
}

/**
 * Optimized utility for merging Tailwind classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export declare function cn(...inputs: ClassValue[]): string;

export declare type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

export declare type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export declare const Modal: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

declare interface ModalCoreOptions {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    centered?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    backdrop?: boolean;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
}

declare interface ModalProps extends ModalCoreOptions {
    open: boolean;
    title?: string;
}

export declare const Progress: DefineComponent<ProgressProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ProgressProps> & Readonly<{}>, {
value: number;
variant: "default" | "success" | "warning" | "danger";
size: "sm" | "md" | "lg";
height: "thin" | "normal" | "thick";
max: number;
rounded: boolean;
showLabel: boolean;
showValue: boolean;
animated: boolean;
striped: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare interface ProgressCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    showLabel?: boolean;
    showValue?: boolean;
    animated?: boolean;
    striped?: boolean;
    rounded?: boolean;
    height?: 'thin' | 'normal' | 'thick';
}

declare interface ProgressProps extends ProgressCoreOptions {
    value?: number;
    max?: number;
    label?: string;
}

export declare type StatusVariant = 'info' | 'success' | 'warning' | 'error';

declare interface Theme {
    background?: string;
    foreground?: string;
    heading?: string;
    body?: string;
    accent?: string;
    accentHover?: string;
    onAccent?: string;
    radius?: string;
    fontFamily?: string;
}

export declare const ThemeProvider: React_2.FC<ThemeProviderProps>;

declare interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React_2.ReactNode;
    /**
     * Apply theme to root document instead of wrapper div
     * Useful for global theming
     */
    global?: boolean;
}

export declare const themes: Record<string, Theme>;

export declare const Toggle: DefineComponent<ToggleProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: boolean) => any;
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<ToggleProps> & Readonly<{
onChange?: (value: boolean) => any;
"onUpdate:modelValue"?: (value: boolean) => any;
}>, {
disabled: boolean;
variant: "default" | "success" | "warning" | "danger";
size: "sm" | "md" | "lg";
loading: boolean;
required: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
buttonRef: HTMLButtonElement;
}, HTMLDivElement>;

declare interface ToggleCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    loading?: boolean;
}

declare interface ToggleProps extends ToggleCoreOptions {
    modelValue?: boolean;
    label?: string;
    description?: string;
}

/**
 * Hook to access the current theme values
 */
export declare const useTheme: () => Required<Theme>;

export declare interface VueButtonProps {
    variant?: ComponentVariant;
    size?: ComponentSize;
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export { }
