import { ClassValue } from 'clsx';
import * as React_2 from 'react';

export declare const Accordion: React_2.FC<AccordionProps>;

export declare type AccordionItem = {
    id: string;
    title: React_2.ReactNode;
    content: React_2.ReactNode;
};

export declare type AccordionProps = {
    items: AccordionItem[];
    type?: 'single' | 'multiple';
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    className?: string;
};

export declare const Alert: React_2.FC<AlertProps>;

declare interface AlertCoreOptions {
    variant?: 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    icon?: boolean;
    border?: boolean;
    rounded?: boolean;
}

export declare type AlertProps = React_2.HTMLAttributes<HTMLDivElement> & AlertCoreOptions & {
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
};

export declare const Avatar: React_2.FC<AvatarProps>;

declare interface AvatarCoreOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    shape?: 'circle' | 'square' | 'rounded';
    status?: 'online' | 'offline' | 'away' | 'busy';
    ring?: boolean;
    ringColor?: 'accent' | 'success' | 'warning' | 'danger';
}

export declare type AvatarProps = AvatarCoreOptions & {
    src?: string;
    name?: string;
    fallback?: string;
};

export declare const Badge: React_2.FC<BadgeProps>;

export declare type BadgeProps = React_2.HTMLAttributes<HTMLSpanElement> & {
    variant?: Variant;
    size?: Size;
};

declare interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export declare const Breadcrumbs: React_2.FC<BreadcrumbsProps>;

export declare type BreadcrumbsProps = {
    items: Crumb[];
    separator?: React_2.ReactNode;
    className?: string;
};

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonCoreOptions {
    variant?: ComponentVariant;
    size?: ComponentSize;
    disabled?: boolean;
    loading?: boolean;
    iconOnly?: boolean;
    fullWidth?: boolean;
}

export declare interface ButtonProps extends Omit<React_2.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, BaseComponentProps, ButtonCoreOptions {
    /**
     * Button variant style
     */
    variant?: ComponentVariant;
    /**
     * Button size
     */
    size?: ComponentSize;
    /**
     * Show loading spinner and disable interaction
     */
    loading?: boolean;
    /**
     * Button type for form submission
     */
    type?: 'button' | 'submit' | 'reset';
}

export declare const Card: React_2.FC<CardProps>;

export declare type CardProps = {
    title?: string;
    description?: string;
    children?: React_2.ReactNode;
    footer?: React_2.ReactNode;
    className?: string;
};

export declare const Carousel: React_2.FC<CarouselProps>;

export declare type CarouselProps = {
    children: React_2.ReactNode[] | React_2.ReactNode;
    initialIndex?: number;
    autoplayMs?: number | null;
    showArrows?: boolean;
    showIndicators?: boolean;
    className?: string;
};

export declare const Chart: React_2.FC<ChartProps>;

export declare type ChartData = {
    label: string;
    value: number;
    color?: string;
};

export declare type ChartProps = {
    data: ChartData[];
    type: 'bar' | 'line' | 'pie';
    width?: number;
    height?: number;
    className?: string;
};

export declare const Checkbox: React_2.ForwardRefExoticComponent<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "type"> & CheckboxCoreOptions & {
    label?: React_2.ReactNode;
    description?: React_2.ReactNode;
    size?: "sm" | "md" | "lg";
} & React_2.RefAttributes<HTMLInputElement>>;

declare interface CheckboxCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'error' | 'success';
    disabled?: boolean;
    indeterminate?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
}

export declare type CheckboxProps = Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type'> & CheckboxCoreOptions & {
    label?: React_2.ReactNode;
    description?: React_2.ReactNode;
    size?: 'sm' | 'md' | 'lg';
};

/**
 * Optimized utility for merging Tailwind classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export declare function cn(...inputs: ClassValue[]): string;

export declare const ColorPicker: React_2.FC<ColorPickerProps>;

export declare type ColorPickerProps = {
    value?: string;
    onChange?: (hex: string) => void;
    label?: React_2.ReactNode;
    className?: string;
};

export declare type Column<T> = {
    key: keyof T;
    header: React_2.ReactNode;
    render?: (value: any, row: T) => React_2.ReactNode;
    width?: string;
};

export declare const Combobox: React_2.FC<ComboboxProps>;

export declare type ComboboxOption = {
    value: string;
    label?: React_2.ReactNode;
};

export declare type ComboboxProps = {
    options: ComboboxOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    clearable?: boolean;
    filter?: (option: ComboboxOption, query: string) => boolean;
    multiple?: boolean;
};

export declare type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';

export declare type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export declare type Crumb = {
    label: React_2.ReactNode;
    href?: string;
};

export declare const DatePicker: React_2.FC<DatePickerProps>;

export declare type DatePickerProps = {
    value?: Date | null;
    onChange?: (value: Date | null) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    yearRange?: [number, number];
};

export declare const Drawer: React_2.FC<DrawerProps>;

export declare type DrawerProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
    children: React_2.ReactNode;
};

export declare const Dropdown: React_2.FC<DropdownProps>;

export declare type DropdownOption = {
    value: string;
    label?: React_2.ReactNode;
};

export declare type DropdownProps = {
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    align?: 'start' | 'center' | 'end';
};

export declare const Footer: React_2.FC<FooterProps>;

export declare type FooterProps = {
    left?: React_2.ReactNode;
    right?: React_2.ReactNode;
    className?: string;
};

export declare const Hero: React_2.FC<HeroProps>;

export declare type HeroProps = {
    title: React_2.ReactNode;
    subtitle?: string;
    cta?: React_2.ReactNode;
    center?: boolean;
    className?: string;
};

export declare const Input: React_2.ForwardRefExoticComponent<React_2.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React_2.ReactNode;
    rightIcon?: React_2.ReactNode;
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
} & React_2.RefAttributes<HTMLInputElement>>;

export declare type InputProps = React_2.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React_2.ReactNode;
    rightIcon?: React_2.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
};

export declare const Loader: React_2.FC<LoaderProps>;

export declare type LoaderProps = {
    size?: 'sm' | 'md' | 'lg';
    label?: React_2.ReactNode;
    className?: string;
};

export declare const LoadingOverlay: React_2.FC<LoadingOverlayProps>;

export declare type LoadingOverlayProps = {
    open?: boolean;
    label?: React_2.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    blurBackground?: boolean;
};

export declare const Markdown: React_2.FC<MarkdownProps>;

export declare type MarkdownProps = {
    content: string;
    className?: string;
};

export declare const Menu: React_2.FC<MenuProps>;

export declare type MenuItem = {
    label: React_2.ReactNode;
    onSelect?: () => void;
    icon?: React_2.ReactNode;
    disabled?: boolean;
};

export declare type MenuProps = {
    trigger: React_2.ReactNode;
    items: MenuItem[];
    className?: string;
    align?: 'start' | 'center' | 'end';
};

export declare const Modal: React_2.FC<ModalProps>;

declare interface ModalCoreOptions {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    centered?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    backdrop?: boolean;
    animation?: 'fade' | 'slide' | 'scale' | 'none';
}

export declare type ModalProps = ModalCoreOptions & {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: React_2.ReactNode;
    initialFocusRef?: React_2.RefObject<HTMLElement>;
};

export declare const MultiSelect: React_2.FC<MultiSelectProps>;

export declare type MultiSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export declare type MultiSelectProps = {
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export declare const Navbar: React_2.FC<NavbarProps>;

export declare type NavbarLinkItem = {
    label: React_2.ReactNode;
    href: string;
};

export declare type NavbarProps = {
    brand?: React_2.ReactNode;
    links?: NavbarLinkItem[];
    className?: string;
    right?: React_2.ReactNode;
};

export declare const NumberInput: React_2.FC<NumberInputProps>;

export declare type NumberInputProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    placeholder?: string;
    className?: string;
};

export declare const Pagination: React_2.FC<PaginationProps>;

export declare type PaginationProps = {
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    className?: string;
};

export declare const Popover: React_2.FC<PopoverProps>;

export declare type PopoverProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger: React_2.ReactNode;
    children: React_2.ReactNode | ((close: () => void) => React_2.ReactNode);
    className?: string;
    align?: 'start' | 'center' | 'end';
    animated?: boolean;
};

export declare const Progress: React_2.FC<ProgressProps>;

export declare const ProgressCircle: React_2.FC<ProgressCircleProps>;

export declare type ProgressCircleProps = {
    value?: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
};

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

export declare type ProgressProps = React_2.HTMLAttributes<HTMLDivElement> & ProgressCoreOptions & {
    value?: number;
    max?: number;
    indeterminate?: boolean;
};

export declare const Radio: React_2.ForwardRefExoticComponent<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
    label?: React_2.ReactNode;
    description?: React_2.ReactNode;
    size?: "sm" | "md";
} & React_2.RefAttributes<HTMLInputElement>>;

export declare type RadioProps = Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    label?: React_2.ReactNode;
    description?: React_2.ReactNode;
    size?: 'sm' | 'md';
};

declare const Range_2: React_2.FC<RangeProps>;
export { Range_2 as Range }

export declare type RangeProps = {
    min: number;
    max: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
    step?: number;
    disabled?: boolean;
    showLabels?: boolean;
    className?: string;
};

export declare const Rating: React_2.FC<RatingProps>;

export declare type RatingProps = {
    value: number;
    onChange?: (value: number) => void;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    readonly?: boolean;
    className?: string;
};

export declare const Separator: React_2.FC<SeparatorProps>;

export declare type SeparatorProps = React_2.HTMLAttributes<HTMLHRElement>;

declare type Size = 'sm' | 'md';

export declare const Skeleton: React_2.FC<SkeletonProps>;

export declare type SkeletonProps = React_2.HTMLAttributes<HTMLDivElement> & {
    rounded?: boolean;
};

export declare const Slider: React_2.ForwardRefExoticComponent<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
    value?: number;
    onValueChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    size?: "sm" | "md";
    onChange?: React_2.ChangeEventHandler<HTMLInputElement>;
} & React_2.RefAttributes<HTMLInputElement>>;

export declare type SliderProps = Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
    value?: number;
    onValueChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    size?: 'sm' | 'md';
    onChange?: React_2.ChangeEventHandler<HTMLInputElement>;
};

export declare const Stats: React_2.FC<StatsProps>;

export declare type StatsProps = {
    title: string;
    value: string | number;
    description?: string;
    trend?: {
        value: number;
        isPositive?: boolean;
        period?: string;
    };
    icon?: React_2.ReactNode;
    className?: string;
};

export declare const Switch: React_2.ForwardRefExoticComponent<SwitchProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare type SwitchProps = {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: React_2.ReactNode;
    description?: React_2.ReactNode;
    disabled?: boolean;
    size?: 'sm' | 'md';
    className?: string;
};

export declare type Tab = {
    value: string;
    label: React_2.ReactNode;
    content: React_2.ReactNode;
};

export declare const Table: React_2.ForwardRefExoticComponent<TableProps<any> & React_2.RefAttributes<HTMLTableElement>>;

export declare type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
    stickyHeader?: boolean;
    className?: string;
    empty?: React_2.ReactNode;
};

export declare const Tabs: React_2.FC<TabsProps>;

export declare type TabsProps = {
    tabs: Tab[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
};

export declare const Tag: React_2.FC<TagProps>;

export declare type TagProps = {
    children: React_2.ReactNode;
    onRemove?: () => void;
    variant?: 'default' | 'outline' | 'subtle';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export declare const Textarea: React_2.ForwardRefExoticComponent<React_2.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
} & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextareaProps = React_2.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
};

export declare interface Theme {
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

export declare interface ThemeProviderProps {
    theme?: Partial<Theme>;
    children: React_2.ReactNode;
    /**
     * Apply theme to root document instead of wrapper div
     * Useful for global theming
     */
    global?: boolean;
}

export declare const themes: Record<string, Theme>;

export declare const Timeline: React_2.FC<TimelineProps>;

export declare type TimelineItem = {
    id: string;
    title: string;
    description?: string;
    date?: string;
    icon?: React_2.ReactNode;
    status?: 'default' | 'success' | 'warning' | 'error';
    disabled?: boolean;
};

export declare type TimelineProps = {
    items: TimelineItem[];
    orientation?: 'vertical' | 'horizontal';
    className?: string;
};

export declare type Toast = {
    id: string;
    title?: React_2.ReactNode;
    description?: React_2.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'danger';
    durationMs?: number;
};

declare type ToastContextType = {
    toasts: Toast[];
    show: (toast: Omit<Toast, 'id'>) => string;
    dismiss: (id: string) => void;
};

export declare const ToastProvider: React_2.FC<ToastProviderProps>;

export declare type ToastProviderProps = {
    children: React_2.ReactNode;
    max?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

export declare const Toggle: React_2.ForwardRefExoticComponent<Omit<React_2.ButtonHTMLAttributes<HTMLButtonElement>, "role" | "aria-pressed"> & ToggleCoreOptions & {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
} & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ToggleCoreOptions {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    loading?: boolean;
}

export declare type ToggleProps = Omit<React_2.ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'aria-pressed'> & ToggleCoreOptions & {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
};

export declare const Tooltip: React_2.FC<TooltipProps>;

export declare type TooltipProps = {
    content: React_2.ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    children: React_2.ReactNode;
    className?: string;
};

export declare const Tree: React_2.FC<TreeProps>;

export declare type TreeNode = {
    id: string;
    label: string;
    children?: TreeNode[];
    icon?: React_2.ReactNode;
    disabled?: boolean;
};

export declare type TreeProps = {
    data: TreeNode[];
    expanded?: string[];
    onExpandedChange?: (expanded: string[]) => void;
    selected?: string[];
    onSelectionChange?: (selected: string[]) => void;
    multiSelect?: boolean;
    className?: string;
};

export declare const Upload: React_2.FC<UploadProps>;

export declare type UploadProps = {
    onFiles?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    className?: string;
    label?: React_2.ReactNode;
};

/**
 * Hook to access the current theme values
 */
export declare const useTheme: () => Required<Theme>;

export declare const useToast: () => ToastContextType;

declare type Variant = 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'subtle';

export declare const VideoPlayer: React_2.FC<VideoPlayerProps>;

export declare type VideoPlayerProps = {
    src: string;
    poster?: string;
    width?: number | string;
    height?: number | string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
};

export declare const VirtualList: React_2.ForwardRefExoticComponent<VirtualListProps<any> & React_2.RefAttributes<HTMLDivElement>>;

export declare type VirtualListProps<T> = {
    items: T[];
    height: number;
    itemHeight: number;
    renderItem: (item: T, index: number) => React_2.ReactNode;
    overscan?: number;
    className?: string;
};

export { }
