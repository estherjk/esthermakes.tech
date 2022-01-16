const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['Consolas', 'Monaco', '"Andale Mono"', '"Ubuntu Mono"', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#171717',
      white: '#FFFFFF',
      gray: {
        0: '#FFFFFF',
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      red: {
        50: '#FEE6EA',
        100: '#FCBBC3',
        200: '#F8919B',
        300: '#F26871',
        400: '#EB4146',
        500: '#E31B1B',
        600: '#C21919',
        700: '#A11717',
        800: '#811414',
        900: '#621111',
      },
    },
    extend: {},
  },
  plugins: [],
};
