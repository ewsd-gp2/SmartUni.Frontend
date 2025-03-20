import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

// https://www.figma.com/design/ImyCpcKqI63i77sxJ237tV/SmartUni_EWSD-(Copy)?node-id=0-1&t=9b0JKVaW71boIEDO-1