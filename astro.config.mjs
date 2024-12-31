// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import tailwind from '@astrojs/tailwind';
import dynamicImport from 'astro-dynamic-import';



// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    solidJs(),
    dynamicImport(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});