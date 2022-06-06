const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  // content: ['./src/**/*.{html, js}'],
  content: ['./**/*.html', './main.js'],
  /* corePlugins: {
    preflight: false,
  }, */
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Open Sans', 'sans-serif', 'Pacifico', 'cursive'],
      },
      backgroundImage: {
        'home-light': "url('../assets/imgs/home_background_light.png')",
        'home-dark': "url('../assets/imgs/home_background_dark.png')",
      },
      screens: {
        mobile: { min: '320px', max: '639px' },
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-300px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
