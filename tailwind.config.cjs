const defaultTheme = require('tailwindcss/defaultTheme')

const COLOR_YELLOW = '#fde047'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        [
          'Inter',
          'system-ui',
          '-apple-system',
          ...defaultTheme.fontFamily.sans,
        ],
      ],
    },
    extend: {
      container: {
        // center: true,
      },
      colors: {
        primary: COLOR_YELLOW,
      },
    },
  },
}