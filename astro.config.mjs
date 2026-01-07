import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://peetdenny.github.io',
  // Keep this as /ClimateVC-Site/ until custom domain DNS is configured
  // Once DNS points to GitHub Pages, change to base: '/' and site: 'https://www.climate.vc'
  base: '/ClimateVC-Site/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

