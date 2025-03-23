import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  base: '/goit-react-hw-08-phonebook/',
  plugins: [react(),  tsconfigPaths()],
})
