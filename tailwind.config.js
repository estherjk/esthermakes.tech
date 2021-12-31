module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: '#E31B1B',
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
    },
    extend: {},
  },
  plugins: [],
};
