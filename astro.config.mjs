import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  // base: '/',
  integrations: [tailwind(), alpinejs()],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
});
