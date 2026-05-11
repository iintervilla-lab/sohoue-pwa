import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remplace "sohoue-pwa" par le nom exact de ton dépôt GitHub
export default defineConfig({
  plugins: [react()],
  base: '/sohoue-pwa/',
})
