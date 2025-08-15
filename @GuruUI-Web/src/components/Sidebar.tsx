import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Download, 
  Layers, 
  Palette, 
  Code, 
  Play,
  Button as ButtonIcon,
  CheckSquare,
  Type,
  AlertCircle,
  Image,
  Menu,
  Navigation,
  BarChart3
} from 'lucide-react'

interface SidebarProps {
  onItemClick?: () => void
}

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Overview', href: '/', icon: Home },
      { name: 'Installation', href: '/installation', icon: Download },
    ]
  },
  {
    title: 'Components',
    items: [
      { name: 'All Components', href: '/components', icon: Layers },
      { name: 'Button', href: '/components/button', icon: ButtonIcon },
      { name: 'Input', href: '/components/input', icon: Type },
      { name: 'Checkbox', href: '/components/checkbox', icon: CheckSquare },
      { name: 'Alert', href: '/components/alert', icon: AlertCircle },
      { name: 'Avatar', href: '/components/avatar', icon: Image },
      { name: 'Menu', href: '/components/menu', icon: Menu },
      { name: 'Progress', href: '/components/progress', icon: BarChart3 },
    ]
  },
  {
    title: 'Customization',
    items: [
      { name: 'Theming', href: '/theming', icon: Palette },
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Examples', href: '/examples', icon: Code },
      { name: 'Playground', href: '/playground', icon: Play },
    ]
  }
]

export default function Sidebar({ onItemClick }: SidebarProps) {
  const location = useLocation()

  return (
    <nav className="h-full overflow-y-auto py-6 px-3">
      <div className="space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h3>
            <div className="mt-3 space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={onItemClick}
                    className={`
                      group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive 
                        ? 'bg-guru-50 text-guru-700 border-r-2 border-guru-500' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon className={`
                      mr-3 h-4 w-4 flex-shrink-0
                      ${isActive ? 'text-guru-500' : 'text-gray-400 group-hover:text-gray-500'}
                    `} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
