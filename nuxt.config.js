export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    middleware: ['auth']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    '@nuxtjs/firebase',


    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

  ],

  firebase: {
    config: {
      apiKey: "AIzaSyD6joDbmBU5hMWkqQc0nvDUddUVVodxXVM",
      authDomain: "next-976fc.firebaseapp.com",
      projectId: "next-976fc",
      storageBucket: "next-976fc.appspot.com",
      messagingSenderId: "354475797525",
      appId: "1:354475797525:web:679d326d023fd7c599721c",
      measurementId: "G-VDNWWN8E2L"
    },
    services: {
      firestore: true,
      storage: true,
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedAction: 'Auth/onAuthStateChangedAction',
          onAuthStateChangedMutation: 'Auth/SET_USER',
          subscribeManually: false
        },
        ssr: false,
      },
      functions: {
        location: 'us-central1',
        emulatorPort: 12345,
        emulatorHost: 'http://10.10.10.3',
      }
    }
  },
  bootstrapVue: {
    icons: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
