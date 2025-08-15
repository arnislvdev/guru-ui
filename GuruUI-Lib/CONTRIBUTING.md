# Contributing to GuruUI

Thank you for wanting to help improve GuruUI! This guide explains how you can contribute.

## How to Help

### Report Issues
- Check if the issue already exists
- Describe what you expected to happen
- Explain what actually happened
- Include steps to reproduce the problem

### Suggest Features
- Explain why the feature would be useful
- Describe how it should work
- Give examples of similar features in other libraries

### Fix Bugs
- Make sure you can reproduce the bug
- Write a test that fails before your fix
- Keep changes small and focused

## Development Setup

### Requirements
- Node.js 18 or higher
- npm or yarn

### Setup Steps
1. Clone the repository
   ```bash
   git clone https://github.com/guru-lv/guru-ui.git
   cd guru-ui
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

### Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run size` - Check bundle size

## Code Standards

### General Rules
- Write clear, readable code
- Add comments for complex logic
- Use consistent naming
- Follow existing code style

### TypeScript
- Use proper types
- Avoid `any` when possible
- Export types for public APIs

### Components
- Keep components focused and simple
- Use the core system for shared logic
- Test accessibility features
- Add proper documentation

## Testing

### Component Testing
- Test all variants and states
- Verify accessibility features
- Check responsive behavior
- Test with different themes

### Integration Testing
- Test framework-specific builds
- Verify tree-shaking works
- Check bundle sizes

## Pull Request Process

### Before Submitting
1. Make sure your code works
2. Run all tests
3. Check that builds succeed
4. Update documentation if needed

### Pull Request Guidelines
- Use clear, descriptive titles
- Explain what your changes do
- Include examples if relevant
- Link to related issues

### Review Process
- All changes need review
- Address feedback promptly
- Keep discussions respectful
- Be open to suggestions

## Questions or Need Help?

- Open an issue for questions
- Join discussions in GitHub
- Ask in the community forum

Thank you for contributing to GuruUI!
