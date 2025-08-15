# Button Component

Interactive buttons for user actions. Supports multiple variants, sizes, and states across all frameworks.

## Basic Usage

### React
```tsx
import { Button } from 'guru-ui'

function Example() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}
```

### Vue
```vue
<template>
  <Button variant="primary" @click="handleClick">
    Click me
  </Button>
</template>

<script setup>
import { Button } from 'guru-ui/vue'

const handleClick = () => {
  console.log('Clicked!')
}
</script>
```

### Vanilla JavaScript
```html
<button data-guru-button data-variant="primary">
  Click me
</button>

<script type="module">
import 'guru-ui/vanilla'

document.addEventListener('guru-button-click', (e) => {
  console.log('Clicked!', e.detail)
})
</script>
```

## Variants

Choose from five button styles:

```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Style</Button>
<Button variant="ghost">Subtle Style</Button>
<Button variant="danger">Destructive Action</Button>
```

### Visual Examples

- **Primary** - Main call-to-action, highest emphasis
- **Secondary** - Secondary actions, medium emphasis  
- **Outline** - Alternative style with border
- **Ghost** - Minimal style for low emphasis
- **Danger** - Destructive actions like delete

## Sizes

Four size options for different contexts:

```tsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
<Button size="xl">Extra Large</Button>
```

### Size Guidelines

- **Small (sm)** - Compact spaces, secondary actions
- **Medium (md)** - Default size, most common use
- **Large (lg)** - Primary actions, hero sections
- **Extra Large (xl)** - Landing pages, marketing

## Icon Buttons

Buttons automatically adapt when they contain only icons:

```tsx
// Icon-only button (automatically square)
<Button variant="primary">
  <IconSearch />
</Button>

// Force icon-only styling
<Button variant="primary" iconOnly>
  <IconSearch />
  <span className="sr-only">Search</span>
</Button>

// Text with icon
<Button variant="primary">
  <IconPlus />
  Add Item
</Button>
```

## States

### Loading State
```tsx
<Button loading disabled>
  Processing...
</Button>
```

### Disabled State
```tsx
<Button disabled>
  Cannot Click
</Button>
```

### Full Width
```tsx
<Button className="w-full">
  Full Width Button
</Button>
```

## Advanced Usage

### Form Submission
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
</form>
```

### Link Button
```tsx
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

### Custom Styling
```tsx
<Button 
  variant="primary"
  className="bg-gradient-to-r from-blue-500 to-purple-600"
>
  Gradient Button
</Button>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable button interactions |
| `loading` | `boolean` | `false` | Show loading state |
| `iconOnly` | `boolean` | `false` | Force icon-only styling |
| `asChild` | `boolean` | `false` | Render as child element |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Button content |

### Events (React)

| Event | Type | Description |
|-------|------|-------------|
| `onClick` | `(event: MouseEvent) => void` | Click event handler |
| `onFocus` | `(event: FocusEvent) => void` | Focus event handler |
| `onBlur` | `(event: FocusEvent) => void` | Blur event handler |

### Events (Vue)

| Event | Type | Description |
|-------|------|-------------|
| `@click` | `(event: MouseEvent) => void` | Click event handler |
| `@focus` | `(event: FocusEvent) => void` | Focus event handler |
| `@blur` | `(event: FocusEvent) => void` | Blur event handler |

### Events (Vanilla)

| Event | Type | Description |
|-------|------|-------------|
| `guru-button-click` | `CustomEvent` | Click event with button details |

### Data Attributes (Vanilla)

| Attribute | Type | Description |
|-----------|------|-------------|
| `data-guru-button` | - | Identifies button element |
| `data-variant` | `string` | Button variant |
| `data-size` | `string` | Button size |
| `data-loading` | `boolean` | Loading state |
| `data-icon-only` | `boolean` | Icon-only styling |

## Styling

### CSS Variables

Customize button appearance with CSS variables:

```css
.my-button {
  --guru-accent: #ff6b6b;
  --guru-accent-hover: #ff5252;
  --guru-on-accent: #ffffff;
  --guru-radius: 8px;
}
```

### Tailwind Classes

Override default styles with Tailwind:

```tsx
<Button className="rounded-full shadow-lg hover:shadow-xl">
  Custom Styled
</Button>
```

## Accessibility

The Button component includes:

- **Keyboard Support** - Space and Enter key activation
- **Focus Management** - Proper focus indicators
- **Screen Readers** - Proper button semantics
- **ARIA Support** - Loading and disabled states

### Best Practices

- Use descriptive text or aria-label for icon buttons
- Provide visual feedback for loading states
- Don't rely only on color to convey meaning
- Ensure sufficient color contrast (4.5:1 minimum)

## Examples

### Action Buttons
```tsx
<div className="flex gap-2">
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
</div>
```

### Icon Actions
```tsx
<div className="flex gap-2">
  <Button variant="ghost" iconOnly>
    <IconEdit />
  </Button>
  <Button variant="ghost" iconOnly>
    <IconDelete />
  </Button>
  <Button variant="ghost" iconOnly>
    <IconShare />
  </Button>
</div>
```

### Form Actions
```tsx
<form className="space-y-4">
  <Input placeholder="Enter your email" />
  <div className="flex gap-2">
    <Button type="submit" variant="primary" className="flex-1">
      Subscribe
    </Button>
    <Button type="button" variant="outline">
      Learn More
    </Button>
  </div>
</form>
```

### Loading States
```tsx
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = async () => {
  setIsLoading(true)
  await submitForm()
  setIsLoading(false)
}

<Button 
  onClick={handleSubmit}
  loading={isLoading}
  disabled={isLoading}
>
  {isLoading ? 'Submitting...' : 'Submit'}
</Button>
```

## Related Components

- [Input](./input.md) - Often used together in forms
- [Modal](./modal.md) - Buttons for modal actions
- [Card](./card.md) - Buttons within card components
