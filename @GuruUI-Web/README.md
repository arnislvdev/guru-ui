# Guru UI Documentation Website

A comprehensive React documentation website for the Guru UI component library. Built with Vite, TypeScript, and Tailwind CSS.

## Features

- **Interactive Playground** - Test components in real-time
- **Component Documentation** - Complete API references and examples
- **Theme Switcher** - Preview components with different themes
- **Code Examples** - Copy-paste ready code snippets
- **Responsive Design** - Works perfectly on all devices
- **Fast Performance** - Built with Vite for optimal speed

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
@GuruUI-Web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Route components
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # App entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── package.json       # Dependencies and scripts
└── vite.config.ts     # Vite configuration
```

## Key Pages

- **Home** (`/`) - Landing page with overview and quick start
- **Installation** (`/installation`) - Setup instructions for all frameworks
- **Components** (`/components`) - Component library overview
- **Component Details** (`/components/:name`) - Individual component documentation
- **Theming** (`/theming`) - Theme customization guide
- **Examples** (`/examples`) - Real-world usage examples
- **Playground** (`/playground`) - Interactive component testing

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Guru UI** - The component library being documented
- **Lucide React** - Beautiful icons

## Development

### Adding New Examples

1. Add your example to the appropriate page in `src/pages/`
2. Create reusable components in `src/components/` if needed
3. Update navigation in `src/components/Sidebar.tsx` if adding new routes

### Customizing Themes

The website uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can modify the color palette to match your brand.

### Code Highlighting

Code examples use the `CodeExample` component which provides:
- Syntax highlighting
- Copy to clipboard functionality
- Language-specific styling

## Deployment

This website can be deployed to any static hosting service:

- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use the built-in Pages action
- **Any CDN** - Upload the `dist` folder contents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see the [LICENSE](../LICENSE) file for details.

---

Built with ❤️ for the Guru UI community.
