# API Reference

Complete reference for all Guru UI components, props, events, and utilities. Use this as your go-to resource for implementation details.

## Component Props

### Button

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  iconOnly?: boolean
  asChild?: boolean
  children?: React.ReactNode
  className?: string
  onClick?: (event: MouseEvent) => void
}
```

### Input

```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search' | 'url'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  error?: boolean | string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  onChange?: (event: ChangeEvent) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
}
```

### Modal

```typescript
interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  backdrop?: boolean
  animation?: 'fade' | 'slide' | 'zoom'
  children?: React.ReactNode
  initialFocusRef?: React.RefObject<HTMLElement>
}
```

### Card

```typescript
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  children?: React.ReactNode
  className?: string
  onClick?: (event: MouseEvent) => void
}
```

### Alert

```typescript
interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  dismissible?: boolean
  icon?: React.ReactNode | boolean
  children?: React.ReactNode
  className?: string
  onDismiss?: () => void
}
```

### Checkbox

```typescript
interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  required?: boolean
  children?: React.ReactNode
  className?: string
  onChange?: (event: ChangeEvent) => void
}
```

### Toggle

```typescript
interface ToggleProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  className?: string
  onChange?: (event: ChangeEvent) => void
}
```

### Switch

```typescript
interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  className?: string
  onChange?: (event: ChangeEvent) => void
}
```

### Radio

```typescript
interface RadioProps {
  value: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  children?: React.ReactNode
  className?: string
  onChange?: (event: ChangeEvent) => void
}
```

### Textarea

```typescript
interface TextareaProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  rows?: number
  autoResize?: boolean
  maxLength?: number
  error?: boolean | string
  helperText?: string
  className?: string
  onChange?: (event: ChangeEvent) => void
}
```

### Tabs

```typescript
interface TabsProps {
  defaultValue?: string
  value?: string
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'underline'
  children?: React.ReactNode
  className?: string
  onChange?: (value: string) => void
}

interface Tab {
  value: string
  label: string
  disabled?: boolean
  content: React.ReactNode
}
```

### Accordion

```typescript
interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  collapsible?: boolean
  children?: React.ReactNode
  className?: string
  onChange?: (value: string | string[]) => void
}

interface AccordionItem {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}
```

### Avatar

```typescript
interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  shape?: 'circle' | 'square'
  status?: 'online' | 'offline' | 'away' | 'busy'
  className?: string
}
```

### Badge

```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  className?: string
}
```

### Progress

```typescript
interface ProgressProps {
  value?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error'
  label?: string
  showValue?: boolean
  className?: string
}
```

### Table

```typescript
interface TableProps {
  data: any[]
  columns: Column[]
  sortable?: boolean
  selectable?: boolean
  pagination?: boolean
  pageSize?: number
  loading?: boolean
  className?: string
  onSort?: (column: string, direction: 'asc' | 'desc') => void
  onSelect?: (selectedRows: any[]) => void
}

interface Column {
  key: string
  header: string
  sortable?: boolean
  width?: string
  render?: (value: any, row: any) => React.ReactNode
}
```

## Theme Interface

```typescript
interface Theme {
  background?: string
  heading?: string
  body?: string
  accent?: string
  accentHover?: string
  onAccent?: string
  radius?: string
  fontFamily?: string
}

interface ThemeProviderProps {
  theme?: Theme
  children: React.ReactNode
}
```

## Utility Functions

### Class Name Utility

```typescript
function cn(...classes: (string | undefined | null | false)[]): string
```

Combines class names intelligently, removing duplicates and handling conditionals.

```typescript
// Usage examples
cn('base-class', 'additional-class') // 'base-class additional-class'
cn('base', condition && 'conditional') // 'base conditional' or 'base'
cn('base', undefined, 'other') // 'base other'
```

### Theme Utilities

```typescript
function useTheme(): Theme
```

React hook to access current theme values.

```typescript
// Usage
const theme = useTheme()
console.log(theme.accent) // Current accent color
```

## Events

### React Events

All components support standard React events:

```typescript
// Standard HTML events
onClick?: (event: MouseEvent) => void
onFocus?: (event: FocusEvent) => void
onBlur?: (event: FocusEvent) => void
onChange?: (event: ChangeEvent) => void

// Component-specific events
onClose?: () => void           // Modal, Drawer, Alert
onDismiss?: () => void         // Alert, Toast
onSelect?: (value: any) => void // Select components
```

### Vue Events

Vue components emit events using the standard Vue event system:

```vue
<!-- Component usage -->
<Button @click="handleClick" />
<Modal @close="handleClose" />
<Input @change="handleChange" />

<!-- Event handlers -->
<script setup>
const handleClick = (event) => {
  console.log('Button clicked', event)
}

const handleClose = () => {
  console.log('Modal closed')
}

const handleChange = (event) => {
  console.log('Input changed', event.target.value)
}
</script>
```

### Vanilla Events

Vanilla JavaScript components use custom events:

```javascript
// Button events
document.addEventListener('guru-button-click', (e) => {
  console.log('Button clicked', e.detail)
})

// Input events
document.addEventListener('guru-input-change', (e) => {
  console.log('Input changed', e.detail.value)
})

// Modal events
document.addEventListener('guru-modal-open', (e) => {
  console.log('Modal opened', e.detail)
})

document.addEventListener('guru-modal-close', (e) => {
  console.log('Modal closed', e.detail)
})
```

## Data Attributes (Vanilla)

### Button

```html
<button data-guru-button data-variant="primary" data-size="md">
  Button Text
</button>
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-guru-button` | - | - | Identifies button element |
| `data-variant` | `string` | `'primary'` | Button variant |
| `data-size` | `string` | `'md'` | Button size |
| `data-disabled` | `boolean` | `false` | Disabled state |
| `data-loading` | `boolean` | `false` | Loading state |

### Input

```html
<input data-guru-input data-placeholder="Enter text" data-required="true">
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-guru-input` | - | - | Identifies input element |
| `data-placeholder` | `string` | - | Placeholder text |
| `data-required` | `boolean` | `false` | Required field |
| `data-disabled` | `boolean` | `false` | Disabled state |
| `data-error` | `boolean` | `false` | Error state |

### Modal

```html
<div data-guru-modal data-title="Modal Title" data-size="md">
  Modal content
</div>
```

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-guru-modal` | - | - | Identifies modal element |
| `data-title` | `string` | - | Modal title |
| `data-size` | `string` | `'md'` | Modal size |
| `data-centered` | `boolean` | `true` | Center modal |
| `data-backdrop` | `boolean` | `true` | Show backdrop |

## CSS Variables

### Color Variables

```css
:root {
  --guru-background: #121212;
  --guru-heading: #ffffff;
  --guru-body: #b3b3b3;
  --guru-accent: #ffffff;
  --guru-accent-hover: #e5e5e5;
  --guru-on-accent: #0b0b0b;
}
```

### Layout Variables

```css
:root {
  --guru-radius: 0.5rem;
  --guru-font: Inter, sans-serif;
  --guru-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --guru-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --guru-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Component-Specific Variables

```css
/* Button specific */
.guru-button {
  --button-padding-x: 1rem;
  --button-padding-y: 0.5rem;
  --button-font-weight: 500;
}

/* Modal specific */
.guru-modal {
  --modal-max-width: 32rem;
  --modal-backdrop-opacity: 0.5;
  --modal-animation-duration: 0.2s;
}
```

## TypeScript Utilities

### Component Ref Types

```typescript
// For forwarded refs
type ButtonRef = React.ElementRef<typeof Button>
type InputRef = React.ElementRef<typeof Input>
type ModalRef = React.ElementRef<typeof Modal>

// Usage
const buttonRef = useRef<ButtonRef>(null)
const inputRef = useRef<InputRef>(null)
```

### Generic Component Props

```typescript
// Extend HTML element props
interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  customProp?: string
}

// Polymorphic component props
interface PolymorphicProps<T extends React.ElementType> {
  as?: T
}

type ButtonProps<T extends React.ElementType = 'button'> = 
  PolymorphicProps<T> & React.ComponentProps<T>
```

### Event Handler Types

```typescript
type ClickHandler = React.MouseEventHandler<HTMLButtonElement>
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>
type CloseHandler = () => void

// Usage
const handleClick: ClickHandler = (e) => {
  console.log('Clicked', e.currentTarget)
}
```

## Accessibility Props

### ARIA Attributes

Components automatically include appropriate ARIA attributes:

```typescript
// Button
{
  'role': 'button',
  'aria-pressed': pressed,
  'aria-disabled': disabled,
  'aria-label': label
}

// Modal
{
  'role': 'dialog',
  'aria-modal': true,
  'aria-labelledby': titleId,
  'aria-describedby': descriptionId
}

// Input
{
  'aria-invalid': error ? 'true' : 'false',
  'aria-describedby': helperTextId,
  'aria-required': required
}
```

### Keyboard Navigation

Standard keyboard support is included:

| Component | Keys | Action |
|-----------|------|--------|
| Button | Space, Enter | Activate |
| Modal | Escape | Close |
| Tabs | Arrow keys | Navigate tabs |
| Dropdown | Arrow keys, Enter, Escape | Navigate and select |
| Accordion | Enter, Space | Toggle sections |

## Migration Guide

### From v0.1.x to v0.2.x

```typescript
// Before
import { Button } from 'guru-ui'
<Button color="primary" />

// After  
import { Button } from 'guru-ui'
<Button variant="primary" />
```

### Breaking Changes

**v0.2.0:**
- `color` prop renamed to `variant` across all components
- `theme` prop structure changed in ThemeProvider
- Some CSS class names updated for consistency

**v0.3.0 (Planned):**
- React 18+ required
- Vue 3.4+ required
- Some legacy prop names will be removed

## Performance Guidelines

### Bundle Size Optimization

```typescript
// Good - tree shaking works
import { Button, Input } from 'guru-ui'

// Avoid - imports entire library
import * as GuruUI from 'guru-ui'
```

### Runtime Performance

```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <ComplexTable data={data} />
})

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return processLargeDataset(rawData)
}, [rawData])
```

## Error Handling

### Common Errors

```typescript
// Missing required props
<Modal /> // Error: 'open' and 'onClose' are required

// Invalid prop values
<Button variant="invalid" /> // Warning: Invalid variant

// Type mismatches
<Input onChange="string" /> // Error: Expected function
```

### Error Boundaries

```tsx
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  return (
    <Alert variant="error">
      Something went wrong: {error.message}
    </Alert>
  )
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponents />
</ErrorBoundary>
```

This API reference covers all the essential interfaces and usage patterns for Guru UI. For more specific examples, check the individual component documentation.
