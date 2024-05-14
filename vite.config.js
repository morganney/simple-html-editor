import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/simple-html-editor/',
  plugins: [
    createHtmlPlugin({
      minify: true,
      viteNext: true
    })
  ],
  build: {
    rollupOptions: {
      external: ['acorn', 'acorn-walk', 'magic-string']
    }
  }
})
