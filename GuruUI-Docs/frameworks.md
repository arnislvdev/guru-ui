# Framework Support

Guru UI works across React, Vue 3, and vanilla JavaScript with consistent APIs and styling. Choose the implementation that fits your project.

## React Support

Default framework with full TypeScript support and React-specific features.

### Installation

```bash
npm install guru-ui
```

### Basic Setup

```tsx
// main.tsx or App.tsx
import 'guru-ui/style.css'

import { Button, Modal, ThemeProvider } from 'guru-ui'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button variant="primary">React Button</Button>
        <Modal open={true} onClose={() => {}}>
          Modal content
        </Modal>
      </div>
    </ThemeProvider>
  )
}
```

### React Features

- **Hooks Integration** - Works with useState, useEffect, etc.
- **Forward Refs** - All components support ref forwarding
- **Event Handling** - Standard React event props
- **TypeScript** - Full type safety with IntelliSense
- **Tree Shaking** - Import only what you need

### React Patterns

```tsx
// Controlled components
const [value, setValue] = useState('')
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled components
<Input defaultValue="initial" />

// Event handling
<Button onClick={(e) => handleClick(e)}>Click me</Button>

// Ref forwarding
const buttonRef = useRef<HTMLButtonElement>(null)
<Button ref={buttonRef}>Button</Button>
```

## Vue 3 Support

Full Vue 3 support with Composition API and single-file components.

### Installation

```bash
npm install guru-ui
```

### Basic Setup

```vue
<template>
  <ThemeProvider>
    <div>
      <Button variant="primary" @click="handleClick">Vue Button</Button>
      <Modal :open="isOpen" @close="isOpen = false">
        Modal content
      </Modal>
    </div>
  </ThemeProvider>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Modal, ThemeProvider } from 'guru-ui/vue'
import 'guru-ui/style.css'

const isOpen = ref(false)

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### Vue Features

- **Composition API** - Uses `<script setup>` syntax
- **Reactive Props** - All props are reactive
- **Event Emitters** - Standard Vue event system
- **TypeScript** - Full type support with Vue 3
- **Tree Shaking** - Import only needed components

### Vue Patterns

```vue
<template>
  <!-- Two-way binding -->
  <Input v-model="inputValue" />
  
  <!-- Event handling -->
  <Button @click="handleClick">Click me</Button>
  
  <!-- Conditional rendering -->
  <Modal v-if="showModal" @close="showModal = false">
    Content
  </Modal>
  
  <!-- Slots -->
  <Card>
    <template #header>Header content</template>
    <template #default>Body content</template>
  </Card>
</template>

<script setup>
import { ref, computed } from 'vue'

const inputValue = ref('')
const showModal = ref(false)

const handleClick = () => {
  showModal.value = true
}
</script>
```

## Vanilla JavaScript Support

Use Guru UI without any framework dependencies. Perfect for existing projects or progressive enhancement.

### Installation

```bash
npm install guru-ui
```

### Basic Setup

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/guru-ui/style.css">
</head>
<body>
  <!-- Data attribute API -->
  <button data-guru-button data-variant="primary">
    Vanilla Button
  </button>
  
  <div data-guru-modal data-size="md">
    Modal content
  </div>

  <script type="module">
    import 'guru-ui/vanilla'
    
    // Components auto-initialize from data attributes
    // Or create programmatically
    import { createButton, createModal } from 'guru-ui/vanilla'
    
    const button = createButton({
      text: 'Dynamic Button',
      variant: 'primary',
      onClick: () => alert('Clicked!')
    })
    
    document.body.appendChild(button.element)
  </script>
</body>
</html>
```

### Vanilla Features

- **No Framework Required** - Works in any JavaScript environment
- **Data Attributes** - Declarative HTML-first approach
- **Programmatic API** - Create components with JavaScript
- **Event System** - Custom events for component interactions
- **Web Standards** - Uses standard DOM APIs

### Vanilla Patterns

```html
<!-- Declarative with data attributes -->
<button 
  data-guru-button 
  data-variant="primary" 
  data-size="lg"
  data-text="My Button">
</button>

<input 
  data-guru-input 
  data-placeholder="Enter text"
  data-helper-text="Required field">

<div 
  data-guru-modal 
  data-title="Confirm Action"
  data-size="sm">
  Are you sure?
</div>
```

```javascript
// Programmatic creation
import { createButton, createModal, createInput } from 'guru-ui/vanilla'

// Create button
const button = createButton({
  text: 'Save Changes',
  variant: 'primary',
  onClick: handleSave
})

// Create modal
const modal = createModal({
  title: 'Confirmation',
  content: 'Are you sure you want to continue?',
  size: 'md',
  onClose: () => modal.close()
})

// Create input
const input = createInput({
  placeholder: 'Enter your name',
  onChange: (value) => console.log('Input changed:', value)
})

// Mount to DOM
document.querySelector('#container').appendChild(button.element)

// Event listeners
document.addEventListener('guru-button-click', (e) => {
  console.log('Button clicked:', e.detail)
})

document.addEventListener('guru-modal-open', (e) => {
  console.log('Modal opened:', e.detail)
})
```

## Framework Comparison

| Feature | React | Vue | Vanilla |
|---------|-------|-----|---------|
| Bundle Size | Medium | Medium | Small |
| Learning Curve | Medium | Medium | Low |
| TypeScript | Full | Full | Basic |
| Performance | Good | Good | Excellent |
| SSR Support | Yes | Yes | N/A |
| Dev Tools | React DevTools | Vue DevTools | Browser DevTools |

## Migration Between Frameworks

### React to Vue

```tsx
// React
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

```vue
<!-- Vue -->
<Button variant="primary" @click="handleClick">
  Click me
</Button>
```

### React to Vanilla

```tsx
// React
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

```html
<!-- Vanilla -->
<button data-guru-button data-variant="primary">
  Click me
</button>

<script>
document.addEventListener('guru-button-click', handleClick)
</script>
```

### Vue to Vanilla

```vue
<!-- Vue -->
<Input v-model="value" placeholder="Enter text" />
```

```html
<!-- Vanilla -->
<input data-guru-input data-placeholder="Enter text">

<script>
document.addEventListener('guru-input-change', (e) => {
  value = e.detail.value
})
</script>
```

## Shared Features

All frameworks share these capabilities:

### Theming

```css
/* Works everywhere */
:root {
  --guru-accent: #your-color;
  --guru-background: #your-bg;
}
```

### Styling

```html
<!-- Same classes work across frameworks -->
<button class="bg-blue-500 hover:bg-blue-600">
  Custom styled button
</button>
```

### Accessibility

- ARIA attributes included automatically
- Keyboard navigation works the same
- Screen reader support consistent
- Focus management identical

### Performance

- Same CSS bundle shared
- Tree shaking works for all
- Similar runtime performance
- Consistent bundle sizes

## Best Practices

### Choose the Right Framework

**Use React when:**
- Building React applications
- Need maximum ecosystem support
- Want familiar React patterns
- Using Next.js or similar

**Use Vue when:**
- Building Vue applications
- Prefer Composition API
- Want template-based components
- Using Nuxt or similar

**Use Vanilla when:**
- No framework in project
- Adding to existing sites
- Want smallest bundle size
- Progressive enhancement approach

### Framework-Specific Tips

**React:**
- Use refs for imperative actions
- Prefer controlled components
- Leverage React patterns (hooks, context)
- Test with React Testing Library

**Vue:**
- Use v-model for two-way binding
- Leverage Vue reactivity
- Use slots for content projection
- Test with Vue Test Utils

**Vanilla:**
- Use data attributes for simple setups
- Use programmatic API for complex logic
- Listen to custom events
- Test with standard DOM APIs

### Performance Optimization

**All Frameworks:**
```javascript
// Import only what you need
import { Button, Input } from 'guru-ui' // Good
import * as GuruUI from 'guru-ui'       // Avoid
```

**React:**
```tsx
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <ComplexVisualization data={data} />
})
```

**Vue:**
```vue
<!-- Use v-once for static content -->
<div v-once>{{ expensiveCalculation }}</div>
```

**Vanilla:**
```javascript
// Batch DOM updates
const updates = []
components.forEach(comp => updates.push(comp.render()))
requestAnimationFrame(() => applyUpdates(updates))
```

## Getting Help

### Framework-Specific Resources

**React:**
- [React Documentation](https://reactjs.org/)
- [React Testing Examples](./examples/react-testing.md)
- [Next.js Integration](./examples/nextjs-setup.md)

**Vue:**
- [Vue 3 Documentation](https://vuejs.org/)
- [Vue Testing Examples](./examples/vue-testing.md)
- [Nuxt Integration](./examples/nuxt-setup.md)

**Vanilla:**
- [Web APIs Documentation](https://developer.mozilla.org/en-US/docs/Web/API)
- [Vanilla Examples](./examples/vanilla-patterns.md)
- [Progressive Enhancement Guide](./examples/progressive-enhancement.md)

### Common Issues

**"Components not styled correctly"**
- Make sure you imported the CSS file
- Check that your bundler processes CSS imports
- Verify CSS variables are being applied

**"TypeScript errors with Vue"**
- Ensure you're using Vue 3.3+
- Update your tsconfig.json for Vue
- Install @vue/typescript-plugin

**"Vanilla components not working"**
- Check that the script loads after DOM is ready
- Verify data attributes are correct
- Make sure you imported the vanilla bundle

Still need help? Check our [FAQ](./faq.md) or ask in [GitHub Discussions](https://github.com/guru-lv/guru-ui/discussions).
