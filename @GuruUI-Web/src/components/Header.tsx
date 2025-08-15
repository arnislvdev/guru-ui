import { Link } from 'react-router-dom'
import { Menu, Github, Package, Sun, Moon } from 'lucide-react'
import { Button } from '@arnis-lv/guru-ui'
import { useState } from 'react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-guru-500 to-guru-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">
              Guru UI
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a 
              href="https://www.npmjs.com/package/@arnis-lv/guru-ui" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Package className="h-5 w-5" />
              <span className="hidden sm:inline ml-2">npm</span>
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a 
              href="https://github.com/guru-lv/guru-ui" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline ml-2">GitHub</span>
            </a>
          </Button>
          
          <Button variant="primary" size="sm" asChild>
            <Link to="/playground">
              Try it out
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
