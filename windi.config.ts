/*
 ** Windi CSS Configuration File
 **
 ** Docs: https://next.windicss.org/guide/configuration.html
 */
import type { Plugin } from 'windicss/types/interfaces'
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
import typography from 'windicss/plugin/typography'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import windiColors from 'windicss/colors'

const plugins: Plugin[] = [
  typography as Plugin,
  aspectRatio as Plugin,
]
console.log(colors)
export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,pug,jade}'],
    exclude: ['node_modules', '.git', '.nuxt'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {
    },
  },
  plugins: [],
})

//console.dir(colors)