import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Determine if we're in production mode
const isProduction = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Production: custom domain, Development: localhost
  site: isProduction ? 'https://www.climate.vc' : 'http://localhost:4321',
  // Production: root path for custom domain, Development: /ClimateVC-Site/ for local testing
  base: isProduction ? '/' : '/ClimateVC-Site/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

