# Contributing to Guru UI

Thank you for your interest in contributing to Guru UI! This guide will help you get started with contributing code, documentation, and ideas to make the library better.

## Ways to Contribute

### Report Issues

Help us improve by reporting bugs or suggesting features:

- **Bug Reports** - Something not working as expected
- **Feature Requests** - Ideas for new components or features
- **Documentation Issues** - Unclear or missing documentation
- **Performance Issues** - Slow loading or large bundle sizes

### Submit Code

Contribute code improvements:

- **Bug Fixes** - Fix existing issues
- **New Components** - Add missing UI components
- **Framework Support** - Improve React, Vue, or vanilla JS implementations
- **Performance Optimizations** - Make the library faster or smaller

### Improve Documentation

Help others use the library:

- **API Documentation** - Improve component documentation
- **Examples** - Add practical usage examples
- **Tutorials** - Create learning guides
- **Translations** - Translate docs to other languages

## Getting Started

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/guru-ui.git
   cd guru-ui
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

4. **Run Tests**
   ```bash
   npm run test
   npm run test:watch  # Watch mode
   ```

### Project Structure

Understanding the codebase:

```
GuruUI-Lib/
├── src/
│   ├── components/     # React components
│   ├── core/          # Shared logic
│   ├── vue/           # Vue components
│   ├── vanilla/       # Vanilla JS
│   ├── theme/         # Theming system
│   └── utils/         # Utilities
├── docs/              # Documentation
├── tests/             # Test files
└── scripts/           # Build scripts
```

### Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write code following our standards
   - Add tests for new functionality
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   npm run test
   npm run build
   npm run lint
   ```

4. **Commit Changes**
   ```bash
   git commit -m "feat: add new button variant"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Standards

### General Guidelines

- **Keep it Simple** - Prefer simple, readable code
- **Follow Patterns** - Match existing code style
- **Document Complex Logic** - Add comments for non-obvious code
- **Test Everything** - Write tests for new features

### TypeScript

- Use strict TypeScript settings
- Provide proper type definitions
- Avoid `any` types when possible
- Export types for public APIs

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

// Avoid
interface ButtonProps {
  variant: any
  size: string
  disabled: boolean | undefined
}
```

### React Components

- Use functional components with hooks
- Forward refs when appropriate
- Use proper prop types
- Handle edge cases gracefully

```tsx
// Good
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <button ref={ref} className={getClasses(variant)} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

### Vue Components

- Use Composition API with `<script setup>`
- Define proper prop types
- Emit events correctly
- Use TypeScript

```vue
<template>
  <button :class="classes" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const classes = computed(() => getClasses(props.variant))
</script>
```

### CSS and Styling

- Use CSS custom properties for theming
- Follow BEM naming for vanilla CSS
- Use Tailwind classes when appropriate
- Ensure proper contrast ratios

```css
/* Good */
.guru-button {
  background: var(--guru-accent);
  color: var(--guru-on-accent);
  border-radius: var(--guru-radius);
}

.guru-button--variant-primary {
  /* variant styles */
}
```

## Testing Guidelines

### Unit Tests

Test individual functions and components:

```typescript
// Core logic tests
describe('ButtonCore', () => {
  test('generates correct classes for variants', () => {
    expect(ButtonCore.getClasses({ variant: 'primary' }))
      .toContain('bg-accent')
  })
})

// Component tests
describe('Button', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

### Accessibility Tests

Ensure components are accessible:

```typescript
test('accessibility compliance', async () => {
  const { container } = render(<Button>Click me</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('keyboard navigation', () => {
  render(<Button>Click me</Button>)
  const button = screen.getByRole('button')
  
  button.focus()
  expect(button).toHaveFocus()
  
  fireEvent.keyDown(button, { key: 'Enter' })
  // Test that action is triggered
})
```

### Cross-Framework Tests

Ensure consistency across frameworks:

```typescript
describe('Cross-framework consistency', () => {
  test('React and Vue render same classes', () => {
    const reactButton = renderReact(<Button variant="primary" />)
    const vueButton = renderVue(Button, { variant: 'primary' })
    
    expect(getClasses(reactButton)).toEqual(getClasses(vueButton))
  })
})
```

## Adding New Components

### 1. Create Core Logic

Start with framework-agnostic logic:

```typescript
// src/core/NewComponentCore.ts
export interface NewComponentCoreOptions {
  variant?: 'default' | 'special'
  size?: 'sm' | 'md' | 'lg'
}

export class NewComponentCore {
  static getClasses(options: NewComponentCoreOptions): string {
    // Implementation
  }
  
  static getAccessibilityProps(options: NewComponentCoreOptions): object {
    // Implementation
  }
}
```

### 2. Create React Component

```tsx
// src/components/NewComponent.tsx
import { NewComponentCore, type NewComponentCoreOptions } from '../core/NewComponentCore'

export type NewComponentProps = React.HTMLAttributes<HTMLDivElement> & 
  NewComponentCoreOptions

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const classes = cn(
      NewComponentCore.getClasses({ variant }),
      className
    )
    const a11yProps = NewComponentCore.getAccessibilityProps({ variant })
    
    return <div ref={ref} className={classes} {...a11yProps} {...props} />
  }
)

NewComponent.displayName = 'NewComponent'
```

### 3. Create Vue Component

```vue
<!-- src/vue/NewComponent.vue -->
<template>
  <div :class="classes" v-bind="accessibilityProps">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NewComponentCore, type NewComponentCoreOptions } from '../core/NewComponentCore'

interface Props extends NewComponentCoreOptions {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const classes = computed(() => cn(
  NewComponentCore.getClasses(props),
  props.class
))

const accessibilityProps = computed(() => 
  NewComponentCore.getAccessibilityProps(props)
)
</script>
```

### 4. Create Vanilla Implementation

```typescript
// src/vanilla/NewComponent.ts
import { NewComponentCore, type NewComponentCoreOptions } from '../core/NewComponentCore'

export interface NewComponentOptions extends NewComponentCoreOptions {
  // Vanilla-specific options
}

export class GuruNewComponent {
  constructor(element: HTMLElement, options: NewComponentOptions = {}) {
    this.element = element
    this.options = { variant: 'default', ...options }
    this.init()
  }
  
  private init() {
    const classes = NewComponentCore.getClasses(this.options)
    const a11yProps = NewComponentCore.getAccessibilityProps(this.options)
    
    this.element.className = cn(this.element.className, classes)
    Object.assign(this.element, a11yProps)
  }
}

export function createNewComponent(options: NewComponentOptions): GuruNewComponent {
  const element = document.createElement('div')
  return new GuruNewComponent(element, options)
}

export function initializeNewComponents() {
  document.querySelectorAll('[data-guru-new-component]').forEach(element => {
    const options = getOptionsFromAttributes(element)
    new GuruNewComponent(element as HTMLElement, options)
  })
}
```

### 5. Add Tests

```typescript
// tests/NewComponent.test.tsx
describe('NewComponent', () => {
  describe('Core', () => {
    test('generates correct classes', () => {
      const classes = NewComponentCore.getClasses({ variant: 'special' })
      expect(classes).toContain('special-variant')
    })
  })
  
  describe('React', () => {
    test('renders correctly', () => {
      render(<NewComponent variant="special">Content</NewComponent>)
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })
  
  describe('Vue', () => {
    test('renders correctly', () => {
      const wrapper = mount(NewComponent, {
        props: { variant: 'special' },
        slots: { default: 'Content' }
      })
      expect(wrapper.text()).toBe('Content')
    })
  })
})
```

### 6. Update Exports

Add to index files:

```typescript
// src/index.ts
export { NewComponent } from './components/NewComponent'
export type { NewComponentProps } from './components/NewComponent'

// src/vue/index.ts
export { default as NewComponent } from './NewComponent.vue'

// src/vanilla/index.ts
export { GuruNewComponent, createNewComponent } from './NewComponent'

// src/core/index.ts
export { NewComponentCore } from './NewComponentCore'
```

### 7. Write Documentation

Create documentation file:

```markdown
<!-- docs/components/new-component.md -->
# NewComponent

Description of the component and its use cases.

## Basic Usage

### React
[React example]

### Vue
[Vue example]

### Vanilla
[Vanilla example]

## API Reference
[Props, events, etc.]
```

## Pull Request Process

### Before Submitting

1. **Test Your Changes**
   ```bash
   npm run test
   npm run build
   npm run lint
   npm run type-check
   ```

2. **Update Documentation**
   - Add or update component docs
   - Update README if needed
   - Add examples for new features

3. **Check Bundle Size**
   ```bash
   npm run size
   npm run analyze
   ```

### Creating the PR

1. **Use Clear Title**
   - `feat: add new Button variant`
   - `fix: resolve Modal focus issue`
   - `docs: improve theming guide`

2. **Provide Context**
   - What does this change?
   - Why is it needed?
   - How does it work?
   - Are there breaking changes?

3. **Link Related Issues**
   - Fixes #123
   - Closes #456
   - Related to #789

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Cross-browser tested

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or noted)
```

## Code Review Process

### What We Look For

- **Functionality** - Does the code work as intended?
- **Performance** - Is it optimized for size and speed?
- **Accessibility** - Is it usable by everyone?
- **Consistency** - Does it match existing patterns?
- **Testing** - Are there adequate tests?

### Responding to Feedback

- **Be Open** - Feedback helps improve the code
- **Ask Questions** - If unclear, ask for clarification
- **Make Changes** - Address feedback promptly
- **Learn** - Use feedback to improve future contributions

## Release Process

### Versioning

We follow Semantic Versioning:
- **Major** (1.0.0) - Breaking changes
- **Minor** (0.1.0) - New features, backwards compatible
- **Patch** (0.0.1) - Bug fixes

### Changelog

All changes are documented:

```markdown
## [0.2.0] - 2024-01-15

### Added
- New DatePicker component
- Vue 3 support improvements

### Changed
- Button hover animations

### Fixed
- Modal focus issues
- TypeScript type exports

### Breaking Changes
- Removed deprecated `color` prop from Button
```

## Community Guidelines

### Be Respectful

- Use inclusive language
- Be patient with newcomers
- Provide constructive feedback
- Help others learn

### Communication

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Pull Requests** - Code changes and reviews

## Getting Help

### Development Questions

- Check existing issues and discussions
- Look at similar components for patterns
- Ask in GitHub Discussions
- Mention maintainers if urgent

### Code Review Help

- Request review from maintainers
- Be patient - reviews take time
- Provide context in PR description
- Test changes thoroughly

### Documentation Help

- Check existing documentation structure
- Follow the same writing style
- Include code examples
- Test examples work correctly

## Recognition

Contributors are recognized in:

- GitHub contributors list
- Release notes acknowledgments
- Annual contributor highlights
- Special badges for significant contributions

Thank you for contributing to Guru UI! Your efforts help make the library better for everyone.
