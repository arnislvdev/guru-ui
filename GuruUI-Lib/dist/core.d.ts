export declare class AlertCore {
    static getClasses(options: AlertCoreOptions): string;
    static getIconClasses(options: AlertCoreOptions): string;
    static getContentClasses(): string;
    static getTitleClasses(): string;
    static getDescriptionClasses(): string;
    static getDismissButtonClasses(options: AlertCoreOptions): string;
    static getAccessibilityProps(options: AlertCoreOptions): {
        role: string;
        'aria-live': string;
        'aria-atomic': boolean;
    };
    static getDefaultOptions(): AlertCoreOptions;
}

export declare interface AlertCoreOptions {
    variant?: 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    icon?: boolean;
    border?: boolean;
    rounded?: boolean;
}

export declare class AvatarCore {
    static getClasses(options: AvatarCoreOptions): string;
    static getRingClasses(ringColor?: string): string;
    static getImageClasses(options: AvatarCoreOptions): string;
    static getFallbackClasses(options: AvatarCoreOptions): string;
    static getStatusClasses(options: AvatarCoreOptions): string;
    static getAccessibilityProps(options: AvatarCoreOptions): {
        role: string;
        'aria-label': string;
    };
    static getDefaultOptions(): AvatarCoreOptions;
}

export declare interface AvatarCoreOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    shape?: 'circle' | 'square' | 'rounded';
    status?: 'online' | 'offline' | 'away' | 'busy';
    ring?: boolean;
    ringColor?: 'accent' | 'success' | 'warning' | 'danger';
}

export declare class BadgeCore {
    static getClasses(options: BadgeCoreOptions): string;
    static getDefaultOptions(): BadgeCoreOptions;
}

export declare interface BadgeCoreOptions {
    variant?: 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'subtle';
    size?: 'sm' | 'md' | 'lg';
    rounded?: boolean;
}

export declare abstract class BaseCore {
    static getSizeClasses(size: ComponentSize): string;
    static getTransitionClasses(): string;
    static getFocusClasses(): string;
    static getDisabledClasses(): string;
    static cssVar(name: string, fallback?: string): string;
    static getBaseAccessibilityProps(disabled?: boolean): {
        tabIndex?: number;
        'aria-disabled': boolean;
    };
}

export declare class ButtonCore extends BaseCore {
    static getClasses(options: ButtonCoreOptions): string;
    static getAccessibilityProps(options: ButtonCoreOptions): {
        type: string;
        'aria-busy': boolean;
        tabIndex?: number;
        'aria-disabled': boolean;
    };
}

export declare interface ButtonCoreOptions {
    variant?: ComponentVariant;
    size?: ComponentSize;
    disabled?: boolean;
    loading?: boolean;
    iconOnly?: boolean;
    fullWidth?: boolean;
}

export declare class CheckboxCore {
    static getContainerClasses(): string;
    static getCheckboxClasses(options: CheckboxCoreOptions): string;
    static getLabelClasses(options: CheckboxCoreOptions): string;
    static getDescriptionClasses(options: CheckboxCoreOptions): string;
    static getIconClasses(options: CheckboxCoreOptions): string;
    static getAccessibilityProps(options: CheckboxCoreOptions): {
        role: string;
        'aria-checked': string | undefined;
        'aria-required': boolean | undefined;
        'aria-invalid': boolean;
        'aria-describedby': string | undefined;
    };
    static getDefaultOptions(): CheckboxCoreOptions;
}

export declare interface CheckboxCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'error' | 'success';
    disabled?: boolean;
    indeterminate?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}

declare type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

declare type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export declare function createComponentClasses(baseClasses: string, sizeClasses: Record<ComponentSize, string>, variantClasses: Record<string, string>, options: {
    size?: ComponentSize;
    variant?: string;
    disabled?: boolean;
    className?: string;
}): string;

export declare class InputCore {
    static getClasses(options: InputCoreOptions): string;
    static getAccessibilityProps(options: InputCoreOptions): {
        disabled: boolean | undefined;
        required: boolean | undefined;
        type: "number" | "text" | "tel" | "url" | "email" | "password";
        placeholder: string | undefined;
        'aria-invalid': boolean;
        'aria-describedby': string | undefined;
    };
    static getDefaultOptions(): InputCoreOptions;
}

export declare interface InputCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'error' | 'success' | 'warning';
    disabled?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    required?: boolean;
}

export declare class LoaderCore {
    static getClasses(options: LoaderCoreOptions): string;
    static getSpinnerClasses(options: LoaderCoreOptions): string;
    static getDotsClasses(options: LoaderCoreOptions): string;
    static getDotClasses(options: LoaderCoreOptions): string;
    static getBarsClasses(options: LoaderCoreOptions): string;
    static getBarClasses(options: LoaderCoreOptions): string;
    static getPulseClasses(options: LoaderCoreOptions): string;
    static getContainerClasses(): string;
    static getAccessibilityProps(options: LoaderCoreOptions): {
        role: string;
        'aria-label': string;
        'aria-live': string;
    };
    static getDefaultOptions(): LoaderCoreOptions;
}

export declare interface LoaderCoreOptions {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'spinner' | 'dots' | 'bars' | 'pulse';
    color?: 'primary' | 'secondary' | 'accent' | 'white';
    speed?: 'slow' | 'normal' | 'fast';
}

export declare class MenuCore {
    static getClasses(options: MenuCoreOptions): string;
    static getContentClasses(options: MenuCoreOptions): string;
    static getItemClasses(options: MenuCoreOptions): string;
    static getItemActiveClasses(options: MenuCoreOptions): string;
    static getItemDisabledClasses(options: MenuCoreOptions): string;
    static getItemTextClasses(): string;
    static getItemIconClasses(): string;
    static getItemRightIconClasses(): string;
    static getSeparatorClasses(): string;
    static getGroupClasses(): string;
    static getSubmenuClasses(options: MenuCoreOptions): string;
    static getTriggerClasses(): string;
    static getContainerClasses(): string;
    static getEnterClasses(options: MenuCoreOptions): string;
    static getEnterActiveClasses(options: MenuCoreOptions): string;
    static getLeaveClasses(options: MenuCoreOptions): string;
    static getLeaveActiveClasses(options: MenuCoreOptions): string;
    static getAccessibilityProps(options: MenuCoreOptions): {
        role: string;
        'aria-orientation': string;
    };
    static getDefaultOptions(): MenuCoreOptions;
}

export declare interface MenuCoreOptions {
    variant?: 'default' | 'minimal' | 'card';
    size?: 'sm' | 'md' | 'lg';
    position?: 'bottom' | 'top' | 'left' | 'right';
    maxHeight?: string | number;
    width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export declare class ModalCore {
    static getClasses(options: ModalCoreOptions): string;
    static getBackdropClasses(options: ModalCoreOptions): string;
    static getContentClasses(options: ModalCoreOptions): string;
    static getHeaderClasses(): string;
    static getBodyClasses(): string;
    static getFooterClasses(): string;
    static getCloseButtonClasses(): string;
    static getAccessibilityProps(options: ModalCoreOptions): {
        role: string;
        'aria-modal': boolean;
        'aria-labelledby': string;
        'aria-describedby': string;
    };
    static getDefaultOptions(): ModalCoreOptions;
}

export declare interface ModalCoreOptions {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    centered?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    backdrop?: boolean;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
}

export declare class PopoverCore {
    static getClasses(options: PopoverCoreOptions): string;
    static getContentClasses(options: PopoverCoreOptions): string;
    static getArrowClasses(options: PopoverCoreOptions): string;
    static getHeaderClasses(options: PopoverCoreOptions): string;
    static getTitleClasses(options: PopoverCoreOptions): string;
    static getBodyClasses(options: PopoverCoreOptions): string;
    static getFooterClasses(options: PopoverCoreOptions): string;
    static getCloseButtonClasses(): string;
    static getContainerClasses(): string;
    static getTriggerClasses(): string;
    static getEnterClasses(options: PopoverCoreOptions): string;
    static getEnterActiveClasses(options: PopoverCoreOptions): string;
    static getLeaveClasses(options: PopoverCoreOptions): string;
    static getLeaveActiveClasses(options: PopoverCoreOptions): string;
    static getAccessibilityProps(options: PopoverCoreOptions): {
        role: string;
        'aria-modal': boolean;
        'aria-describedby': string;
    };
    static getDefaultOptions(): PopoverCoreOptions;
}

export declare interface PopoverCoreOptions {
    position?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'default' | 'card' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    arrow?: boolean;
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    maxWidth?: string | number;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
}

export declare class ProgressCore {
    static getContainerClasses(options: ProgressCoreOptions): string;
    static getTrackClasses(options: ProgressCoreOptions): string;
    static getBarClasses(options: ProgressCoreOptions): string;
    static getLabelClasses(options: ProgressCoreOptions): string;
    static getValueClasses(options: ProgressCoreOptions): string;
    static getInfoClasses(options: ProgressCoreOptions): string;
    static getAccessibilityProps(options: ProgressCoreOptions): {
        role: string;
        'aria-valuemin': number;
        'aria-valuemax': number;
        'aria-valuenow': number;
        'aria-label': string | undefined;
    };
    static getDefaultOptions(): ProgressCoreOptions;
    static calculatePercentage(value: number, max: number): number;
    static getProgressColor(percentage: number): string;
}

export declare interface ProgressCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    showLabel?: boolean;
    showValue?: boolean;
    animated?: boolean;
    striped?: boolean;
    rounded?: boolean;
    height?: 'thin' | 'normal' | 'thick';
}

export declare class RadioCore extends BaseCore {
    static getGroupClasses(options: RadioCoreOptions): string;
    static getItemClasses(): string;
    static getClasses(options: RadioCoreOptions): string;
    static getCheckedClasses(options: RadioCoreOptions): string;
    static getIndicatorClasses(options: RadioCoreOptions): string;
    static getLabelClasses(options: RadioCoreOptions): string;
    static getDescriptionClasses(options: RadioCoreOptions): string;
    static getAccessibilityProps(options: RadioCoreOptions): {
        type: string;
        name: string | undefined;
        value: string | undefined;
        checked: boolean;
        required: boolean | undefined;
        'aria-invalid': boolean;
        'aria-describedby': string | undefined;
        tabIndex?: number;
        'aria-disabled': boolean;
    };
    static getDefaultOptions(): RadioCoreOptions;
}

export declare interface RadioCoreOptions {
    size?: ComponentSize;
    variant?: ComponentVariant;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    checked?: boolean;
    error?: boolean;
    orientation?: 'horizontal' | 'vertical';
}

export declare class SkeletonCore {
    static getClasses(options: SkeletonCoreOptions): string;
    static getTextClasses(options: SkeletonCoreOptions): string;
    static getCircularClasses(options: SkeletonCoreOptions): string;
    static getRectangularClasses(options: SkeletonCoreOptions): string;
    static getAccessibilityProps(options: SkeletonCoreOptions): {
        role: string;
        'aria-label': string;
        'aria-live': string;
    };
    static getDefaultOptions(): SkeletonCoreOptions;
}

export declare interface SkeletonCoreOptions {
    variant?: 'text' | 'circular' | 'rectangular';
    size?: 'sm' | 'md' | 'lg';
    width?: string | number;
    height?: string | number;
    animation?: 'pulse' | 'wave' | 'none';
}

export declare class SwitchCore extends BaseCore {
    static getContainerClasses(): string;
    static getClasses(options: SwitchCoreOptions): string;
    static getActiveClasses(options: SwitchCoreOptions): string;
    static getThumbClasses(options: SwitchCoreOptions): string;
    static getThumbActiveClasses(options: SwitchCoreOptions): string;
    static getLabelClasses(options: SwitchCoreOptions): string;
    static getDescriptionClasses(options: SwitchCoreOptions): string;
    static getLoadingClasses(): string;
    static getAccessibilityProps(options: SwitchCoreOptions): {
        role: string;
        'aria-checked': boolean;
        'aria-required': boolean | undefined;
        'aria-describedby': string | undefined;
        'aria-busy': boolean;
        tabIndex?: number;
        'aria-disabled': boolean;
    };
    static getDefaultOptions(): SwitchCoreOptions;
}

export declare interface SwitchCoreOptions {
    size?: ComponentSize;
    variant?: ComponentVariant;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    loading?: boolean;
    checked?: boolean;
}

export declare class TextareaCore extends BaseCore {
    static getClasses(options: TextareaCoreOptions): string;
    static getAccessibilityProps(options: TextareaCoreOptions): {
        disabled: boolean | undefined;
        required: boolean | undefined;
        placeholder: string | undefined;
        rows: number | undefined;
        cols: number | undefined;
        'aria-invalid': boolean;
        'aria-describedby': string | undefined;
        tabIndex?: number;
        'aria-disabled': boolean;
    };
    static getDefaultOptions(): TextareaCoreOptions;
}

export declare interface TextareaCoreOptions {
    size?: ComponentSize;
    variant?: ComponentVariant;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    cols?: number;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    fullWidth?: boolean;
    error?: boolean;
}

export declare class ToggleCore {
    static getContainerClasses(): string;
    static getToggleClasses(options: ToggleCoreOptions): string;
    static getToggleActiveClasses(options: ToggleCoreOptions): string;
    static getThumbClasses(options: ToggleCoreOptions): string;
    static getThumbActiveClasses(options: ToggleCoreOptions): string;
    static getLabelClasses(options: ToggleCoreOptions): string;
    static getDescriptionClasses(options: ToggleCoreOptions): string;
    static getLoadingClasses(): string;
    static getAccessibilityProps(options: ToggleCoreOptions): {
        role: string;
        'aria-checked': boolean;
        'aria-required': boolean | undefined;
        'aria-describedby': string | undefined;
    };
    static getDefaultOptions(): ToggleCoreOptions;
}

export declare interface ToggleCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    loading?: boolean;
}

export declare class TooltipCore {
    static getClasses(options: TooltipCoreOptions): string;
    static getArrowClasses(options: TooltipCoreOptions): string;
    static getContainerClasses(): string;
    static getTriggerClasses(): string;
    static getContentClasses(options: TooltipCoreOptions): string;
    static getDelayClasses(options: TooltipCoreOptions): string;
    static getEnterClasses(options: TooltipCoreOptions): string;
    static getEnterActiveClasses(options: TooltipCoreOptions): string;
    static getLeaveClasses(options: TooltipCoreOptions): string;
    static getLeaveActiveClasses(options: TooltipCoreOptions): string;
    static getAccessibilityProps(options: TooltipCoreOptions): {
        role: string;
        'aria-describedby': string;
    };
    static getDefaultOptions(): TooltipCoreOptions;
}

export declare interface TooltipCoreOptions {
    position?: 'top' | 'bottom' | 'left' | 'right';
    variant?: 'dark' | 'light' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    arrow?: boolean;
    delay?: 'none' | 'fast' | 'normal' | 'slow';
    maxWidth?: string | number;
}

export { }
