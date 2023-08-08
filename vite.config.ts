// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    vue(),
  ],
  define: {
    'process.env': Object.assign({}, process.env)
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy:{
      '/api':{
         target:'http://localhost:3000/',
         changeOrigin:true,
         rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
})