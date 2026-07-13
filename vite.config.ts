import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// This is the correct configuration for a Vite-based Chrome extension.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Define all entry points for your extension
        popup: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'src/background.ts'),
        content: resolve(__dirname, 'src/content.ts'),
      },
      output: {
        // Configure the output file names
        entryFileNames: `[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
