import { useState } from 'react'
import { Menu, X, Github, Package } from 'lucide-react'
import { Button } from '@arnis-lv/guru-ui'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 lg:hidden">
            <span className="text-lg font-semibold">Navigation</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Sidebar onItemClick={() => setSidebarOpen(false)} />
        </div>
        
        {/* Main content */}
        <div className="flex-1 lg:pl-0">
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
