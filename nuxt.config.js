export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Бухгалтерские услуги в Ставрополе',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Наша компания оказывает бухгалтерские услуги  организациям, индивидуальным предпринимателям, а также физическим лицам, как по Ставрополю, так и за его пределами.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "keywords", content: "бухгалтер, декларация, 3-НДФЛ, отчет, патент, УСН, бухгалтерия, бухучет, бухгалтерские услуги, бухгалтерские услуги в Ставпрополе, ведение налогового учета, бухгалтерский учет, кадровый учет, заполнение 3-НДФЛ, заполнение декларации Ставрополь, оптимизация налогов, бухгалтерские отчеты, составление заявления на патент, бухгалтерский учет на УСН, Упрощенной системе налогообложения, бухучет, бухгалтерия" },
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
    { src: '~/plugins/ymapPlugin.js',  mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['unplugin-icons/nuxt', { /* options */ }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-precompress',
    '@nuxtjs/yandex-metrika'
  ],
  yandexMetrika: {
    id: '93585175',
    // ...
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true, 
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  }
}
