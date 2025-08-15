# Quick Start Guide

Get up and running with Guru UI in just a few minutes. This guide will walk you through creating your first components and understanding the basics.

## Your First Component

Let's start with a simple button. Choose your framework:

### React

```tsx
import { Button } from 'guru-ui'
import 'guru-ui/style.css'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="p-8">
      <Button variant="primary" onClick={handleClick}>
        My First Button
      </Button>
    </div>
  )
}
```

### Vue

```vue
<template>
  <div class="p-8">
    <Button variant="primary" @click="handleClick">
      My First Button
    </Button>
  </div>
</template>

<script setup>
import { Button } from 'guru-ui/vue'
import 'guru-ui/style.css'

const handleClick = () => {
  alert('Button clicked!')
}
</script>
```

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/guru-ui/style.css">
</head>
<body>
  <div class="p-8">
    <button data-guru-button data-variant="primary">
      My First Button
    </button>
  </div>

  <script type="module">
    import 'guru-ui/vanilla'
    
    // Add click handler
    document.addEventListener('guru-button-click', (e) => {
      alert('Button clicked!')
    })
  </script>
</body>
</html>
```

## Understanding Variants

Most components support different variants for different use cases:

```tsx
// Different button styles
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Style</Button>
<Button variant="ghost">Subtle Style</Button>
<Button variant="danger">Destructive Action</Button>
```

## Adding More Components

Let's build a simple form with multiple components:

### React Example

```tsx
import { 
  Button, 
  Input, 
  Card, 
  Alert, 
  Checkbox 
} from 'guru-ui'
import { useState } from 'react'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && agreed) {
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <Card>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        
        {submitted && (
          <Alert variant="success" className="mb-4">
            Thank you! We'll be in touch soon.
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          >
            I agree to the terms and conditions
          </Checkbox>
          
          <Button 
            type="submit" 
            variant="primary" 
            disabled={!email || !agreed}
            className="w-full"
          >
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  )
}
```

### Vue Example

```vue
<template>
  <div class="max-w-md mx-auto p-8">
    <Card>
      <h2 class="text-xl font-bold mb-4">Contact Us</h2>
      
      <Alert v-if="submitted" variant="success" class="mb-4">
        Thank you! We'll be in touch soon.
      </Alert>
      
      <form @submit="handleSubmit" class="space-y-4">
        <Input
          type="email"
          placeholder="Your email address"
          v-model="email"
          required
        />
        
        <Checkbox v-model="agreed">
          I agree to the terms and conditions
        </Checkbox>
        
        <Button 
          type="submit" 
          variant="primary" 
          :disabled="!email || !agreed"
          class="w-full"
        >
          Send Message
        </Button>
      </form>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Input, Card, Alert, Checkbox } from 'guru-ui/vue'

const email = ref('')
const agreed = ref(false)
const submitted = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  if (email.value && agreed.value) {
    submitted.value = true
  }
}
</script>
```

## Working with Themes

Guru UI comes with built-in themes you can use:

```tsx
import { ThemeProvider, themes } from 'guru-ui'

function App() {
  return (
    <ThemeProvider theme={themes.blue}>
      <YourComponents />
    </ThemeProvider>
  )
}
```

Available themes:
- `themes.default` - Default dark theme
- `themes.blue` - Blue accent
- `themes.violet` - Purple accent
- `themes.emerald` - Green accent
- `themes.amber` - Orange accent
- `themes.rose` - Red accent

## Creating Custom Themes

You can also create your own theme:

```tsx
const customTheme = {
  background: '#1a1a1a',
  heading: '#ffffff',
  body: '#cccccc',
  accent: '#ff6b6b',
  accentHover: '#ff5252',
  onAccent: '#ffffff'
}

<ThemeProvider theme={customTheme}>
  <YourApp />
</ThemeProvider>
```

## Responsive Design

All components work well on different screen sizes. Use Tailwind classes for responsive layouts:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Mobile first</Card>
  <Card>Responsive grid</Card>
  <Card>Automatic sizing</Card>
</div>
```

## Handling State

Components support controlled and uncontrolled patterns:

```tsx
// Controlled (you manage state)
const [value, setValue] = useState('')
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled (component manages state)
<Input defaultValue="initial value" />
```

## Common Patterns

### Loading States

```tsx
// Button with loading
<Button loading disabled>
  Processing...
</Button>

// Loading overlay
<LoadingOverlay visible={isLoading}>
  <YourContent />
</LoadingOverlay>
```

### Form Validation

```tsx
const [errors, setErrors] = useState({})

<Input
  error={errors.email}
  helperText={errors.email || "Enter your email"}
  required
/>
```

### Modal Dialogs

```tsx
const [isOpen, setIsOpen] = useState(false)

<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to continue?</p>
</Modal>
```

## Accessibility Features

Guru UI components include accessibility features by default:

- Proper ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

You don't need to do anything special - just use the components normally.

## Performance Tips

### Import Only What You Need

```tsx
// Good - tree shaking works
import { Button, Input } from 'guru-ui'

// Avoid - imports everything
import * as GuruUI from 'guru-ui'
```

### Use CSS Variables for Theming

```css
/* Global theme changes */
:root {
  --guru-accent: #your-color;
  --guru-background: #your-bg;
}
```

### Lazy Load Heavy Components

```tsx
import { lazy } from 'react'

const Chart = lazy(() => import('guru-ui').then(m => ({ default: m.Chart })))
```

## Next Steps

Now that you know the basics:

1. Explore all [available components](./components/overview.md)
2. Learn about [advanced theming](./theming.md)
3. Check out [real-world examples](./examples/)
4. Read the [API reference](./api-reference.md)

## Getting Help

If you run into issues:

- Check the [FAQ](./faq.md)
- Look at [component examples](./components/)
- Ask questions in [GitHub Discussions](https://github.com/guru-lv/guru-ui/discussions)

Happy building!
