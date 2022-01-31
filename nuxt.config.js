export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    exclude: ['/services'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ovidio Pérez | Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Web Developer, but mainly, a problem solver who will help you find a solutions to yours.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dttbfql17/image/upload/v1643669343/link-photo_v9ly78.png',
      },
      {
        property: 'og:image:width',
        content: '400',
      },
      {
        property: 'og:image:height',
        content: '400',
      },
      {
        name: 'robots',
        content: 'all,follow',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        href: 'https://fonts.googleapis.com/css?family=https://fonts.googleapis.com/css?family=Inconsolata:400,500,600,700|Raleway:400,400i,500,500i,600,600i,700,700i',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
    '~/node_modules/aos/dist/aos.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/isotope-layout.js', mode: 'client' },
    { src: '~/plugins/imagesloaded.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'bootstrap',
      'bootstrap-icons',
      'aos',
      'isotope-layout',
      'imagesloaded',
    ],
  },
}
