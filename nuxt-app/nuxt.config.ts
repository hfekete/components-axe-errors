// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-vitest'
  ],
  pages: true,
  ssr: false,
  typescript: {
    strict: true,
    includeWorkspace: true
  },
  ui: {
    icons: ['mdi'] // add here more icon sets from iconifiy if needed.
  }
})
