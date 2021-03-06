const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', ...defaultTheme.fontFamily.serif]
      },
      fontSize: {
        xxs: '.6875rem',
        tiny: '.625rem'
      },
      spacing: {
        18: '4.5rem',
        prose: '65ch',
        nav: '17.5rem'
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms'
      },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04'
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(66, 153, 225, 0.5)'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      red: colors.red,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink
    }
  },
  darkMode: 'class',
  experimental: 'all',
  future: 'all',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ]
}
