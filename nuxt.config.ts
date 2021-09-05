export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build: https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/bridge'
  ],

  // Bridge configuration
  bridge: {
    // nitro: true,
    // vite: false,
    // app: true,
    // postcss8: true,
    // swc: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
