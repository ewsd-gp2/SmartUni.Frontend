import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     "/smartuni": {
  //       target: "http://localhost:7142",  // Your backend URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/smartuni/, ''), // Remove '/smartuni' from path
  //       secure: false,
  //     },
  //   },
  // },
})
