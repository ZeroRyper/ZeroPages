import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'tailwindcss/nesting/index.js'
export default defineConfig({
  plugins: [
    nesting(), // Add nesting plugin before Tailwind
    tailwindcss({
      // ... your Tailwind configuration
    }),
    autoprefixer(),
  ],
  // ... other configuration options
});