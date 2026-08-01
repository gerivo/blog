// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "GNU Unifont",
    cssVariable: "--font-pixel",
    options: {
      variants: [
        {
          weight: "normal",
          style: "normal",
          src: ["./src/assets/fonts/unifont.otf"]
        },
      ]
    }
  }]
});