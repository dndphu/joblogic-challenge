// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1,viewport-fit=cover' },
        { hid: 'description', name: 'description', content: '' },
      ],
    },
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
})
