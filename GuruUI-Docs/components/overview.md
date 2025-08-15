# Component Overview

Guru UI provides 40+ production-ready components that work across React, Vue, and vanilla JavaScript. All components share the same API and styling across frameworks.

## Component Categories

### Form Components

Components for user input and data collection:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Button](./button.md) | Interactive buttons | 5 variants, 4 sizes, loading states |
| [Input](./input.md) | Text input fields | Validation, helper text, icons |
| [Textarea](./textarea.md) | Multi-line text input | Auto-resize, character count |
| [Checkbox](./checkbox.md) | Selection checkboxes | Indeterminate state, custom labels |
| [Radio](./radio.md) | Radio button groups | Keyboard navigation, grouping |
| [Switch](./switch.md) | Toggle switches | Loading states, sizes |
| [Toggle](./toggle.md) | On/off toggles | Smooth animations |
| [Slider](./slider.md) | Range sliders | Min/max values, step control |
| [Range](./range.md) | Dual range sliders | Multiple handles |
| [NumberInput](./number-input.md) | Number inputs | Increment/decrement buttons |
| [DatePicker](./date-picker.md) | Date selection | Calendar popup, date ranges |
| [ColorPicker](./color-picker.md) | Color selection | Hex, RGB, HSL support |
| [Upload](./upload.md) | File uploads | Drag and drop, progress |
| [Rating](./rating.md) | Star ratings | Half stars, readonly mode |

### Selection Components

Components for choosing from options:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Dropdown](./dropdown.md) | Simple dropdowns | Search, custom options |
| [Combobox](./combobox.md) | Searchable select | Autocomplete, tagging |
| [MultiSelect](./multiselect.md) | Multiple selection | Chips, search filtering |

### Layout Components

Components for organizing content:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Card](./card.md) | Content containers | Shadows, borders, padding |
| [Modal](./modal.md) | Overlay dialogs | Focus management, animations |
| [Drawer](./drawer.md) | Side panels | Left/right/top/bottom placement |
| [Tabs](./tabs.md) | Tabbed content | Keyboard navigation, indicators |
| [Accordion](./accordion.md) | Collapsible sections | Single/multiple open |
| [Separator](./separator.md) | Visual dividers | Horizontal/vertical |

### Navigation Components

Components for site navigation:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Navbar](./navbar.md) | Navigation bars | Mobile responsive, dropdowns |
| [Footer](./footer.md) | Page footers | Multi-column layouts |
| [Breadcrumbs](./breadcrumbs.md) | Navigation breadcrumbs | Custom separators, links |
| [Pagination](./pagination.md) | Page navigation | Prev/next, page numbers |
| [Menu](./menu.md) | Context menus | Nested items, keyboard navigation |

### Feedback Components

Components for user feedback and status:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Alert](./alert.md) | Status messages | 4 variants, dismissible |
| [Toast](./toast.md) | Notifications | Auto-dismiss, positioning |
| [Tooltip](./tooltip.md) | Hover information | Multiple positions, delays |
| [Popover](./popover.md) | Rich popup content | Click/hover triggers |
| [Progress](./progress.md) | Progress bars | Determinate/indeterminate |
| [ProgressCircle](./progress-circle.md) | Circular progress | Size variants, labels |
| [Skeleton](./skeleton.md) | Loading placeholders | Custom shapes, animations |
| [Loader](./loader.md) | Loading spinners | Multiple styles, sizes |
| [LoadingOverlay](./loading-overlay.md) | Full-screen loading | Blur effects, custom content |

### Data Display Components

Components for showing information:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Table](./table.md) | Data tables | Sorting, pagination, selection |
| [Avatar](./avatar.md) | Profile images | Fallback text, size variants |
| [Badge](./badge.md) | Status indicators | Colors, positioning |
| [Tag](./tag.md) | Labels and categories | Removable, color variants |
| [Stats](./stats.md) | Metric displays | Icons, trends, formatting |
| [Chart](./chart.md) | Data visualization | Line, bar, pie charts |
| [Timeline](./timeline.md) | Event timelines | Vertical layout, custom items |
| [Tree](./tree.md) | Hierarchical data | Expandable nodes, selection |
| [VirtualList](./virtual-list.md) | Large lists | Performance optimization |

### Media Components

Components for media content:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [VideoPlayer](./video-player.md) | Video playback | Custom controls, captions |
| [Carousel](./carousel.md) | Image carousels | Auto-play, navigation |
| [Hero](./hero.md) | Hero sections | Background images, CTAs |

### Utility Components

Components for enhanced functionality:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| [Markdown](./markdown.md) | Markdown rendering | Syntax highlighting, links |

## Framework Support

All components are available in three versions:

### React (Default)
```tsx
import { Button, Modal } from 'guru-ui'
```

### Vue 3
```tsx
import { Button, Modal } from 'guru-ui/vue'
```

### Vanilla JavaScript
```html
<button data-guru-button>Click me</button>
<script type="module">
  import 'guru-ui/vanilla'
</script>
```

## Common Properties

Most components share these common properties:

### Size Variants
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large  
- `xl` - Extra large

### Color Variants
- `primary` - Main accent color
- `secondary` - Secondary styling
- `outline` - Outlined style
- `ghost` - Subtle background
- `danger` - Warning/error styling

### State Properties
- `disabled` - Disabled state
- `loading` - Loading state
- `error` - Error state
- `readonly` - Read-only state

## Accessibility Features

All components include:

- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels
- **Focus Management** - Logical focus order
- **Color Contrast** - WCAG AA compliance
- **High Contrast Mode** - Windows high contrast support

## Responsive Design

Components automatically adapt to different screen sizes:

- **Mobile First** - Designed for small screens first
- **Touch Friendly** - Appropriate touch targets
- **Flexible Layouts** - Work with CSS Grid and Flexbox
- **Breakpoint Aware** - Tailwind responsive utilities

## Performance Optimizations

- **Tree Shaking** - Only bundle what you use
- **Lazy Loading** - Components load on demand
- **Small Bundle Size** - Optimized for production
- **CSS Variables** - Runtime theming without rebuilds

## Getting Started

1. Choose a component from the list above
2. Click the link to read detailed documentation
3. Copy the example code for your framework
4. Customize with props and styling

## Need Help?

- Check individual component documentation
- Look at the [examples directory](../examples/)
- Visit [GitHub discussions](https://github.com/guru-lv/guru-ui/discussions)
- Read the [FAQ](../faq.md)
