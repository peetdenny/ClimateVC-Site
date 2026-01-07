import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourusername.github.io',
  // For GitHub Pages project repository (https://yourusername.github.io/repo-name)
  // Set base to '/repo-name/' (with trailing slash)
  // For custom domain or user site (yourusername.github.io), set base to '/'
  base: '/site',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

