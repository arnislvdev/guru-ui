import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// List of components to generate cores for
const components = [
  'Button',
  'Card', 
  'Input',
  'Badge',
  'Modal',
  'Alert',
  'Avatar',
  'Checkbox',
  'Toggle',
  'Textarea',
  'Switch',
  'Radio',
  'Progress',
  'Skeleton',
  'Loader',
  'LoadingOverlay',
  'Tooltip',
  'Popover',
  'Menu',
  'Slider',
  'Combobox',
  'DatePicker',
  'Accordion',
  'Drawer',
  'Pagination',
  'Breadcrumbs',
  'ProgressCircle',
  'Dropdown',
  'Carousel',
  'Table',
  'Upload',
  'ColorPicker',
  'Tag',
  'Stats',
  'Rating',
  'NumberInput',
  'Range',
  'MultiSelect',
  'Tree',
  'Timeline',
  'Chart',
  'VirtualList',
  'VideoPlayer',
  'Markdown'
]

// Template for core component
const coreTemplate = (componentName) => `export interface ${componentName}CoreOptions {
  // Add options based on component props
}

export class ${componentName}Core {
  static getClasses(options: ${componentName}CoreOptions): string {
    // Extract classes from React component
    return ''
  }

  static getAccessibilityProps(options: ${componentName}CoreOptions) {
    // Extract accessibility props
    return {}
  }

  static getDefaultOptions(): ${componentName}CoreOptions {
    return {}
  }
}
`

// Generate core files
components.forEach(componentName => {
  const corePath = path.join(__dirname, '..', 'src', 'core', `${componentName}Core.ts`)
  
  // Only create if doesn't exist
  if (!fs.existsSync(corePath)) {
    fs.writeFileSync(corePath, coreTemplate(componentName))
    console.log(`✅ Created ${componentName}Core.ts`)
  } else {
    console.log(`⏭️  ${componentName}Core.ts already exists`)
  }
})

// Update core index
const coreIndexPath = path.join(__dirname, '..', 'src', 'core', 'index.ts')
const coreExports = components.map(name => `export * from './${name}Core'`).join('\n')
const coreTypes = components.map(name => `  ${name}CoreOptions`).join(',\n')

const coreIndexContent = `// Core Components - Shared logic across all frameworks
${coreExports}

// Re-export types for convenience
export type {
${coreTypes}
} from './ButtonCore'
`

fs.writeFileSync(coreIndexPath, coreIndexContent)
console.log('✅ Updated core/index.ts')

console.log('\n🎉 Core generation complete!')
console.log('Next steps:')
console.log('1. Implement the logic in each Core class')
console.log('2. Update React components to use cores')
console.log('3. Create Vue and vanilla wrappers')
console.log('4. Test across all frameworks')
