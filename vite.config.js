import { defineConfig } from 'vite'
export default defineConfig({
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
      cors: {
        origin: ['https://mydomain.com/'], // or true to allow all
      }
    }
  })