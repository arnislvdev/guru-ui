import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*']
    }),
  ],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        vue: fileURLToPath(new URL('./src/vue/index.ts', import.meta.url)),
        vanilla: fileURLToPath(new URL('./src/vanilla/index.ts', import.meta.url)),
        core: fileURLToPath(new URL('./src/core/index.ts', import.meta.url))
      },
      name: 'arnis-ux',
      formats: ['es'],
      fileName: (format, entryName) => {
        return entryName === 'index' ? 'index.js' : `${entryName}.js`
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vue'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          vue: 'Vue'
        },
        manualChunks: {
          'react-components': [
            './src/components/Button.tsx',
            './src/components/Modal.tsx',
            './src/components/Alert.tsx',
            './src/components/Avatar.tsx',
            './src/components/Checkbox.tsx',
            './src/components/Toggle.tsx',
            './src/components/Progress.tsx',
            './src/components/Skeleton.tsx'
          ],
          'vue-components': [
            './src/vue/Button.vue',
            './src/vue/Modal.vue',
            './src/vue/Alert.vue',
            './src/vue/Avatar.vue',
            './src/vue/Checkbox.vue',
            './src/vue/Toggle.vue',
            './src/vue/Progress.vue'
          ],
          'vanilla-components': [
            './src/vanilla/Button.ts',
            './src/vanilla/Modal.ts',
            './src/vanilla/Alert.ts'
          ],
          'core': [
            './src/core/ButtonCore.ts',
            './src/core/ModalCore.ts',
            './src/core/AlertCore.ts',
            './src/core/AvatarCore.ts',
            './src/core/CheckboxCore.ts',
            './src/core/ToggleCore.ts',
            './src/core/ProgressCore.ts',
            './src/core/SkeletonCore.ts',
            './src/core/LoaderCore.ts',
            './src/core/LoadingOverlayCore.ts',
            './src/core/TooltipCore.ts',
            './src/core/PopoverCore.ts',
            './src/core/MenuCore.ts'
          ]
        }
      }
    },
    sourcemap: false, // Disable sourcemaps for production
    target: 'es2020', // Modern target for better tree-shaking
    cssCodeSplit: false, // Bundle all CSS into one file
    minify: 'esbuild',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'vue']
  }
})


