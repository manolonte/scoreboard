import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    allowedHosts: ['localhost', '127.0.0.1', '192.168.2.14', 'cloud.guerreromendez.nom.es']
  }
})


