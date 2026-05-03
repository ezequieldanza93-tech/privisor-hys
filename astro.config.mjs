import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://privisor-hys.netlify.app',
  integrations: [sitemap()],
});
