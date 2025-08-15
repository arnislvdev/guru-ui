#!/usr/bin/env node

/**
 * Performance benchmark script for Guru UI
 * Measures bundle size, load times, and tree-shaking effectiveness
 */

import fs from 'fs'
import path from 'path'
import { gzipSync } from 'zlib'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '../dist')

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath)
    const content = fs.readFileSync(filePath)
    const gzipped = gzipSync(content)
    
    return {
      raw: stats.size,
      gzipped: gzipped.length,
      exists: true
    }
  } catch (error) {
    return { raw: 0, gzipped: 0, exists: false }
  }
}

console.log('🔍 Guru UI Bundle Analysis\n')

const files = [
  { name: 'React Components', path: 'index.js' },
  { name: 'Vue Components', path: 'vue.js' },
  { name: 'Vanilla JS', path: 'vanilla.js' },
  { name: 'Core Logic', path: 'core.js' },
  { name: 'Utilities', path: 'utils.js' },
  { name: 'Styles', path: '../style.css' }
]

const results = []
let totalGzipped = 0

files.forEach(file => {
  const filePath = path.join(distPath, file.path)
  const size = getFileSize(filePath)
  
  if (size.exists) {
    results.push({
      name: file.name,
      raw: size.raw,
      gzipped: size.gzipped
    })
    totalGzipped += size.gzipped
  } else {
    console.log(`⚠️  ${file.name} not found at ${file.path}`)
  }
})

console.log('📦 Bundle Sizes:')
console.log('─'.repeat(50))

results.forEach(result => {
  console.log(`${result.name.padEnd(20)} ${formatBytes(result.gzipped).padStart(8)} (gzipped)`)
})

console.log('─'.repeat(50))
console.log(`Total Library Size: ${formatBytes(totalGzipped)} (gzipped)`)

// Performance recommendations
console.log('\n🚀 Performance Recommendations:')

if (totalGzipped < 30000) {
  console.log('✅ Excellent bundle size - under 30KB')
} else if (totalGzipped < 50000) {
  console.log('✅ Good bundle size - under 50KB')
} else {
  console.log('⚠️  Bundle size is getting large - consider optimizations')
}

// Tree-shaking test
console.log('\n🌳 Tree-shaking Test:')
const coreSize = results.find(r => r.name === 'Core Logic')?.gzipped || 0
const reactSize = results.find(r => r.name === 'React Components')?.gzipped || 0

if (coreSize > 0 && reactSize > 0) {
  const ratio = (coreSize / reactSize * 100).toFixed(1)
  console.log(`Core to React ratio: ${ratio}% (lower is better for tree-shaking)`)
  
  if (ratio < 30) {
    console.log('✅ Excellent tree-shaking - core is lightweight')
  } else if (ratio < 50) {
    console.log('✅ Good tree-shaking optimization')
  } else {
    console.log('⚠️  Consider optimizing core bundle size')
  }
}

// Individual component analysis
console.log('\n🧩 Component Analysis:')
const componentsDir = path.join(distPath, 'components')

if (fs.existsSync(componentsDir)) {
  const componentFiles = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const size = getFileSize(path.join(componentsDir, file))
      return {
        name: file.replace('.js', ''),
        size: size.gzipped
      }
    })
    .sort((a, b) => b.size - a.size)
    .slice(0, 5) // Top 5 largest

  console.log('Largest components:')
  componentFiles.forEach(comp => {
    console.log(`  ${comp.name.padEnd(15)} ${formatBytes(comp.size)}`)
  })
}

console.log('\n✨ Analysis complete!')
