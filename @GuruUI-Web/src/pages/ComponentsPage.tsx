import { Link } from 'react-router-dom'
import { 
  Button as ButtonIcon,
  CheckSquare,
  Type,
  AlertCircle,
  Image,
  Menu,
  BarChart3,
  Toggle,
  RadioButton,
  TextCursor,
  Loader,
  Skeleton,
  MessageSquare,
  MousePointer,
  Badge,
  Navigation
} from 'lucide-react'

const components = [
  {
    name: 'Button',
    description: 'Clickable buttons with multiple variants and sizes',
    icon: ButtonIcon,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Input', 
    description: 'Text input fields with validation and error states',
    icon: Type,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Textarea',
    description: 'Multi-line text input with auto-resize support',
    icon: TextCursor,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Checkbox',
    description: 'Checkboxes for boolean selections with indeterminate state',
    icon: CheckSquare,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Radio',
    description: 'Radio buttons for single selections from groups',
    icon: RadioButton,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Switch',
    description: 'Toggle switches for boolean settings',
    icon: Toggle,
    implemented: true,
    category: 'Form',
  },
  {
    name: 'Alert',
    description: 'Alert messages with different severity levels',
    icon: AlertCircle,
    implemented: true,
    category: 'Feedback',
  },
  {
    name: 'Progress',
    description: 'Progress bars for showing completion status',
    icon: BarChart3,
    implemented: true,
    category: 'Feedback',
  },
  {
    name: 'Loader',
    description: 'Loading indicators with multiple animation styles',
    icon: Loader,
    implemented: true,
    category: 'Feedback',
  },
  {
    name: 'Skeleton',
    description: 'Skeleton placeholders for loading content',
    icon: Skeleton,
    implemented: true,
    category: 'Feedback',
  },
  {
    name: 'Avatar',
    description: 'User avatars with fallbacks and status indicators',
    icon: Image,
    implemented: true,
    category: 'Display',
  },
  {
    name: 'Badge',
    description: 'Small labels and status indicators',
    icon: Badge,
    implemented: true,
    category: 'Display',
  },
  {
    name: 'Menu',
    description: 'Dropdown menus with keyboard navigation',
    icon: Menu,
    implemented: true,
    category: 'Navigation',
  },
  {
    name: 'Tooltip',
    description: 'Contextual information on hover',
    icon: MessageSquare,
    implemented: true,
    category: 'Overlay',
  },
  {
    name: 'Popover',
    description: 'Rich content popovers with positioning',
    icon: MousePointer,
    implemented: true,
    category: 'Overlay',
  },
  {
    name: 'Modal',
    description: 'Modal dialogs with focus management',
    icon: Navigation,
    implemented: true,
    category: 'Overlay',
  },
]

const categories = ['All', 'Form', 'Feedback', 'Display', 'Navigation', 'Overlay']

export default function ComponentsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Components</h1>
        <p className="text-lg text-gray-600">
          16 fully implemented components with consistent APIs across React, Vue, and vanilla JavaScript.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-guru-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-guru-600">16</div>
          <div className="text-sm text-gray-600">Components</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">100%</div>
          <div className="text-sm text-gray-600">Implemented</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-sm text-gray-600">Frameworks</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">TypeScript</div>
          <div className="text-sm text-gray-600">First</div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${category === 'All' 
                  ? 'bg-guru-100 text-guru-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link
            key={component.name}
            to={`/components/${component.name.toLowerCase()}`}
            className="group block"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-guru-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-guru-50 rounded-lg group-hover:bg-guru-100 transition-colors">
                  <component.icon className="h-6 w-6 text-guru-600" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {component.category}
                  </span>
                  {component.implemented && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      ✓ Ready
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-guru-700 transition-colors">
                {component.name}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {component.description}
              </p>
              
              <div className="mt-4 text-guru-600 text-sm font-medium">
                View Documentation →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bundle Information */}
      <div className="mt-16 bg-gradient-to-r from-guru-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance First</h2>
        <p className="text-gray-600 mb-6">
          All components are optimized for minimal bundle size and maximum performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-guru-600">Tree-Shakable</div>
            <div className="text-sm text-gray-600">Import only what you need</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-guru-600">TypeScript</div>
            <div className="text-sm text-gray-600">Full type safety included</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-guru-600">Accessible</div>
            <div className="text-sm text-gray-600">WCAG compliant by default</div>
          </div>
        </div>
      </div>
    </div>
  )
}
