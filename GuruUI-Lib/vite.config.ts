import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react({
      // Optimize React for production builds
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    }),
    vue({
      // Optimize Vue for production builds
      reactivityTransform: true
    }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*', 'src/**/*.stories.*']
    }),
  ],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        vue: fileURLToPath(new URL('./src/vue/index.ts', import.meta.url)),
        vanilla: fileURLToPath(new URL('./src/vanilla/index.ts', import.meta.url)),
        core: fileURLToPath(new URL('./src/core/index.ts', import.meta.url)),
        utils: fileURLToPath(new URL('./src/utils/index.ts', import.meta.url))
      },
      name: 'GuruUI',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        'vue',
        'clsx',
        'tailwind-merge'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        // Optimize for tree-shaking
        manualChunks: undefined
      }
    },
    target: 'es2020',
    cssCodeSplit: false,
    minify: 'esbuild',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500, // Warn for chunks > 500kb
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  optimizeDeps: {
    include: ['clsx', 'tailwind-merge']
  },
  esbuild: {
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  }
})


