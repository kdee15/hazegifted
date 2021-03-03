export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Haze Gifted',
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
    'node_modules/normalize.css/normalize.css',
    '~/assets/scss/.base/bootstrap-grid.min.css',
    "~/assets/scss/styles.scss" ,
  ],

  styleResources: {
    scss: ["./assets/scss/styles.scss"]
  } ,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/page-components/',
        prefix: ''
      },
      {
        path: '~/components/sub-components/',
        prefix: ''
      }
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-purgecss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@blokwise/dynamic",
    "@nuxtjs/style-resources",
  ],

  publicRuntimeConfig: {
    CTF_HOMEPAGE_ID: process.env.CTF_HOMEPAGE_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT || 'master' ,

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
