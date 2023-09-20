import colors from 'vuetify/es5/util/colors'


export default {
  // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router:{
      base: '/recruiting/'
    },
    head: {
    title: 'Рекрутинг С-ВИТА',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'S-Vita Consulting Group – группа компаний, предоставляющая широкий спектр консалтинговых и аутсорсинговых услуг для бизнеса. Мы предлагаем комплексный подход в формате «одного окна» с финансовой ответственностью за результат и взятые на себя обязательства. Помогаем бизнесу решить юридические вопросы, увидеть реальную картину денежных потоков, найти пути оптимизации расходов и увеличения прибыли.' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'КДП С-ВИТА' },
      { property: 'og:description', content: 'S-Vita Consulting Group – группа компаний, предоставляющая широкий спектр консалтинговых и аутсорсинговых услуг для бизнеса. Мы предлагаем комплексный подход в формате «одного окна» с финансовой ответственностью за результат и взятые на себя обязательства. Помогаем бизнесу решить юридические вопросы, увидеть реальную картину денежных потоков, найти пути оптимизации расходов и увеличения прибыли.' },
      { property: 'og:url', content: 'https://s-vita-hr.ru/' },
      { property: 'og:site_name', content: 'КДП С-ВИТА' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.svg' },
    ],
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/legasy-st.css', // Путь к вашему CSS-файлу
    './assets/custom-styles.css', // Путь к вашему CSS-файлу
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.amber.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
