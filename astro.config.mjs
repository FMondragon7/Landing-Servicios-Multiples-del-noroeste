// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@/assets': fileURLToPath(new URL('./assets', import.meta.url)),
      },
    },
  },
});
