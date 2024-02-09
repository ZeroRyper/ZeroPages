import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'tailwindcss/nesting';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    nesting(), // Add nesting plugin before Tailwind
    tailwindcss({
      // ... your Tailwind configuration
    }),
    autoprefixer(),],
})
