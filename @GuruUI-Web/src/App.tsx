import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import InstallationPage from './pages/InstallationPage'
import ComponentsPage from './pages/ComponentsPage'
import ComponentDetailPage from './pages/ComponentDetailPage'
import ThemingPage from './pages/ThemingPage'
import ExamplesPage from './pages/ExamplesPage'
import PlaygroundPage from './pages/PlaygroundPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/installation" element={<InstallationPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/:componentName" element={<ComponentDetailPage />} />
        <Route path="/theming" element={<ThemingPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
