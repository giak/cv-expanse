import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path'; // Import Node.js path module
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias pour pointer directement vers les sources des autres packages
      // Utile pendant le développement pour éviter d'avoir à build les dépendances constamment
      '@cv-generator/core': path.resolve(__dirname, '../core/src'),
      '@cv-generator/infrastructure': path.resolve(__dirname, '../infrastructure/src'),
      '@cv-generator/shared': path.resolve(__dirname, '../shared/src'),
    }
  },
  // Add other Vite configurations if needed (e.g., server options)
}); 