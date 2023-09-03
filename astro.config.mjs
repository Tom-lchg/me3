import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
   plugins: ['prettier-plugin-astro'],
   integrations: [
      react(),
      tailwind({
         applyBaseStyles: false,
      }),
   ],
   overrides: [
      {
         files: '*.astro',
         options: {
            parser: 'astro',
         },
      },
   ],
})
