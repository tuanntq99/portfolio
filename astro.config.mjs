import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// GitHub Pages deployment config
// Note: If using a custom domain or user page (e.g. tuanntq99.github.io at root), set BASE_PATH='/' in your environment.
const BASE_PATH = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : '/portfolio';

export default defineConfig({
  site: 'https://tuanntq99.github.io',
  base: BASE_PATH,
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
