/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

//color
import colors from 'vuetify/lib/util/colors'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: colors.shades.white,
          surface: colors.grey.lighten5,
          primary: colors.shades.black,
          'primary-darken-1': colors.shades.black,
          secondary: colors.lightBlue.darken2,
          'secondary-darken-1': colors.lightBlue.darken4,
          error: colors.red.darken4,
          info: colors.blue.darken1,
          success: colors.green.accent3,
          warning: colors.yellow.darken2,
        }, 
      },
      dark: { 
        colors: {
          something: '#000000',
          background: colors.grey.darken4,
          surface: colors.blueGrey.darken4,
          primary: colors.blue.darken4,
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        }, 
      },
    },
  },
})
