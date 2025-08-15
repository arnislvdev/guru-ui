#!/usr/bin/env node

/**
 * Post-build script for Guru UI
 * Handles CSS copying and optimization after build
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

// Copy main CSS file
try {
  const srcCSS = path.join(rootDir, 'dist/style.css')
  const destCSS = path.join(rootDir, 'style.css')
  
  if (fs.existsSync(srcCSS)) {
    fs.copyFileSync(srcCSS, destCSS)
    console.log('✅ Copied style.css to root')
  } else {
    console.log('⚠️  dist/style.css not found')
  }
} catch (error) {
  console.error('❌ Failed to copy style.css:', error.message)
}

// Copy animations CSS file
try {
  const srcAnimations = path.join(rootDir, 'dist/animations.css')
  const destAnimations = path.join(rootDir, 'animations.css')
  
  if (fs.existsSync(srcAnimations)) {
    fs.copyFileSync(srcAnimations, destAnimations)
    console.log('✅ Copied animations.css to root')
  } else {
    console.log('⚠️  dist/animations.css not found')
  }
} catch (error) {
  console.error('❌ Failed to copy animations.css:', error.message)
}

// Generate build info
const buildInfo = {
  timestamp: new Date().toISOString(),
  version: JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8')).version,
  node: process.version,
  platform: process.platform
}

fs.writeFileSync(
  path.join(rootDir, 'dist/build-info.json'),
  JSON.stringify(buildInfo, null, 2)
)

console.log('✅ Build post-processing complete!')
