import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {//configuraciones para desarrollo en docker-compose.yml
    watch: {//configuraciones para desarrollo en docker-compose.yml
      usePolling: true,//configuraciones para desarrollo en docker-compose.yml
    },//configuraciones para desarrollo en docker-compose.yml
    host: '0.0.0.0',//configuraciones para desarrollo en docker-compose.yml
    port: 5173//configuraciones para desarrollo en docker-compose.yml
  },//configuraciones para desarrollo en docker-compose.yml
})
