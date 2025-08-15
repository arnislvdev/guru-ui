# Frequently Asked Questions

Common questions and answers about using Guru UI. If you don't find your answer here, check our GitHub discussions or create an issue.

## Installation and Setup

### Why are components not styled properly?

This is usually because the CSS file isn't imported. Make sure you have:

```tsx
import 'guru-ui/style.css'
```

This should be imported once in your main entry file (App.tsx, main.tsx, or index.js).

### Can I use Guru UI without Tailwind CSS?

Yes! Guru UI includes all necessary styles in its CSS file. Tailwind is optional and only needed if you want to use Tailwind classes alongside Guru UI components.

### How do I set up TypeScript?

Guru UI includes TypeScript definitions out of the box. Make sure you're using TypeScript 5.0 or higher and have proper module resolution:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### Which React version do I need?

Guru UI requires React 18 or higher. For Vue, you need Vue 3.3 or higher.

## Framework Support

### Can I use Guru UI with Next.js?

Yes! Guru UI works great with Next.js. Import the CSS in your `_app.tsx`:

```tsx
import 'guru-ui/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### Does it work with Nuxt?

Yes! Add the CSS to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ['guru-ui/style.css']
})
```

### Can I use it with Create React App?

Yes! Just import the CSS in your `src/index.js` or `src/App.js`:

```jsx
import 'guru-ui/style.css'
```

### What about Vite?

Vite works perfectly with Guru UI. No special configuration needed, just import the CSS.

## Theming and Styling

### How do I change the default colors?

Use the ThemeProvider or CSS variables:

```tsx
// With ThemeProvider
<ThemeProvider theme={{ accent: '#ff6b6b' }}>
  <App />
</ThemeProvider>

// With CSS variables
:root {
  --guru-accent: #ff6b6b;
}
```

### Can I override component styles?

Yes! You can use the `className` prop or CSS variables:

```tsx
// With className
<Button className="bg-red-500 hover:bg-red-600">Custom</Button>

// With CSS variables
<Button style={{ '--guru-accent': '#ff6b6b' }}>Custom</Button>
```

### How do I create a dark theme?

Use the ThemeProvider with dark colors:

```tsx
const darkTheme = {
  background: '#1a1a1a',
  heading: '#ffffff',
  body: '#cccccc',
  accent: '#3b82f6'
}

<ThemeProvider theme={darkTheme}>
  <App />
</ThemeProvider>
```

### Why don't my custom styles work?

Check CSS specificity. You might need to increase specificity or use `!important`:

```css
/* Increase specificity */
.my-custom-button.guru-button {
  background: red;
}

/* Or use !important */
.my-custom-button {
  background: red !important;
}
```

## Component Usage

### How do I handle form validation?

Use the `error` prop and provide validation logic:

```tsx
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const validateEmail = (value) => {
  if (!value.includes('@')) {
    setError('Please enter a valid email')
  } else {
    setError('')
  }
}

<Input
  value={email}
  onChange={(e) => {
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }}
  error={error}
  helperText={error || 'Enter your email address'}
/>
```

### Can I use refs with components?

Yes! All components support ref forwarding:

```tsx
const buttonRef = useRef(null)

<Button ref={buttonRef}>Click me</Button>

// Access the element
console.log(buttonRef.current) // HTMLButtonElement
```

### How do I make a button full width?

Use the `className` prop with Tailwind or CSS:

```tsx
<Button className="w-full">Full Width Button</Button>
```

### Why is my modal not closing?

Make sure you're updating the `open` prop when `onClose` is called:

```tsx
const [isOpen, setIsOpen] = useState(false)

<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)} // This is required
>
  Content
</Modal>
```

## Performance

### Is Guru UI tree-shakeable?

Yes! Import only what you need:

```tsx
// Good - only imports Button
import { Button } from 'guru-ui'

// Avoid - imports everything
import * as GuruUI from 'guru-ui'
```

### How big is the bundle size?

The entire library is around 50KB gzipped, but with tree-shaking you'll only bundle what you use. A typical app using 5-10 components might add 15-20KB.

### Does it support code splitting?

Yes! You can lazy load components:

```tsx
const Modal = lazy(() => import('guru-ui').then(m => ({ default: m.Modal })))
```

### How can I reduce bundle size?

- Only import components you use
- Use the framework-specific builds
- Enable tree-shaking in your bundler
- Consider importing core logic only if you don't need the React/Vue wrappers

## Accessibility

### Are components accessible by default?

Yes! All components include:
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management

### How do I add custom accessibility labels?

Use standard HTML attributes:

```tsx
<Button aria-label="Close dialog">×</Button>
<Input aria-describedby="email-help" />
```

### Do components work with screen readers?

Yes! All components are tested with screen readers and include proper semantic markup.

## Browser Support

### Which browsers are supported?

Guru UI works in all modern browsers:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### What about Internet Explorer?

IE is not supported. The library uses modern CSS features like CSS Grid and custom properties.

### Do I need polyfills?

For modern browsers, no polyfills are needed. For older browsers, you might need polyfills for:
- CSS custom properties
- ResizeObserver
- IntersectionObserver

## Development

### How do I contribute to Guru UI?

Check our [Contributing Guide](./contributing.md) for detailed instructions.

### Can I add custom components?

Yes! You can extend Guru UI by creating your own components using the same patterns:

```tsx
import { cn } from 'guru-ui/utils'

const MyComponent = ({ className, ...props }) => {
  return (
    <div 
      className={cn('my-base-styles', className)}
      {...props}
    />
  )
}
```

### How do I report bugs?

Create an issue on our [GitHub repository](https://github.com/guru-lv/guru-ui/issues) with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details

## Migration

### How do I upgrade to a new version?

Check the [changelog](../GuruUI-Lib/CHANGELOG.md) for breaking changes and follow the migration guide in the release notes.

### Can I use multiple versions?

It's not recommended. Stick to one version to avoid conflicts and ensure consistent styling.

### What if I need to downgrade?

You can downgrade, but check the changelog for any breaking changes that might affect your code.

## Troubleshooting

### Components look different in different browsers

This usually indicates missing CSS. Make sure:
1. The CSS file is imported
2. Your bundler processes CSS imports
3. There are no conflicting stylesheets

### TypeScript errors with component props

Common solutions:
1. Update to TypeScript 5.0+
2. Check that you're importing types correctly
3. Make sure your tsconfig.json is configured properly

### Styles not updating with theme changes

Make sure you're using CSS variables, not hardcoded values:

```css
/* Good */
background: var(--guru-accent);

/* Avoid */
background: #3b82f6;
```

### Build errors with ES modules

Some bundlers need configuration for ES modules:

```js
// webpack.config.js
module.exports = {
  resolve: {
    fullySpecified: false
  }
}
```

### Components not rendering in tests

Make sure to import the CSS in your test setup:

```js
// setupTests.js
import 'guru-ui/style.css'
```

## Getting More Help

### Where can I ask questions?

- [GitHub Discussions](https://github.com/guru-lv/guru-ui/discussions) - General questions
- [GitHub Issues](https://github.com/guru-lv/guru-ui/issues) - Bug reports
- [Discord Community] - Real-time chat (coming soon)

### How do I stay updated?

- Watch the GitHub repository for releases
- Follow the changelog for updates
- Join our newsletter for major announcements

### Can I get commercial support?

Currently, support is community-based through GitHub. Enterprise support options may be available in the future.

### What if my question isn't answered here?

Create a discussion on GitHub with:
- Clear description of your question
- Code examples if relevant
- What you've already tried
- Your environment details

We're always happy to help and improve this FAQ based on common questions!
