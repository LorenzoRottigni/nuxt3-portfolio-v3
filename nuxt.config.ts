import { defineNuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: "LR's portfolio",
  },
  css: ['virtual:windi.css', "virtual:windi-base.css", "virtual:windi-utilities.css", "assets/css/bs-grid.min.css", "assets/css/windi.css"],
  buildModules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    [
      '@intlify/nuxt3',
      {
        localeDir: 'locales',
        vueI18n: {
          locale: 'en'
        }
      }
    ]
  ],
  windicss: {
    analyze: {
      server: {
        port: 4444,
        open: true
      }
    }
  },
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: true,
      }),
    ],
  },
})
