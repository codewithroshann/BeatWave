import { defineConfig } from 'vite'
// see https://github.com/vitejs/vite/issues/7281#issuecomment-1209787785
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ViteEnv {}
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
