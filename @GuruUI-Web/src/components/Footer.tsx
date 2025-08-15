import { Link } from 'react-router-dom'
import { Github, Package, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-guru-500 to-guru-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="font-bold">Guru UI</span>
            </div>
            <p className="text-sm text-gray-600">
              A lightweight, multi-framework UI component library built for modern web development.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Getting Started</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/installation" className="text-gray-600 hover:text-guru-600">Installation</Link></li>
              <li><Link to="/components" className="text-gray-600 hover:text-guru-600">Components</Link></li>
              <li><Link to="/theming" className="text-gray-600 hover:text-guru-600">Theming</Link></li>
              <li><Link to="/examples" className="text-gray-600 hover:text-guru-600">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/guru-lv/guru-ui" 
                  className="text-gray-600 hover:text-guru-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.npmjs.com/package/@arnis-lv/guru-ui" 
                  className="text-gray-600 hover:text-guru-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NPM Package
                </a>
              </li>
              <li><Link to="/playground" className="text-gray-600 hover:text-guru-600">Playground</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/guru-lv/guru-ui" 
                className="text-gray-400 hover:text-guru-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.npmjs.com/package/@arnis-lv/guru-ui" 
                className="text-gray-400 hover:text-guru-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Guru UI. MIT License.
          </p>
          <p className="text-sm text-gray-600 flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Arnis
          </p>
        </div>
      </div>
    </footer>
  )
}
