
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-100': 'rgba(0, 0, 0, 0.1)',
        'black-200': 'rgba(0, 0, 0, 0.2)',
        'black-300': 'rgba(0, 0, 0, 0.3)',
        'black-400': 'rgba(0, 0, 0, 0.4)',
        'black-500': 'rgba(0, 0, 0, 0.5)',
        'black-600': 'rgba(0, 0, 0, 0.6)',
        'black-700': 'rgba(0, 0, 0, 0.7)',
        'black-800': 'rgba(0, 0, 0, 0.8)',
        'black-900': 'rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        'noto': ['sans-serif'],
      },
      textColor: {
        'black-100': 'rgba(0, 0, 0, 0.1)',
        'black-200': 'rgba(0, 0, 0, 0.2)',
        'black-300': 'rgba(0, 0, 0, 0.3)',
        'black-400': 'rgba(0, 0, 0, 0.4)',
        'black-500': 'rgba(0, 0, 0, 0.5)',
        'black-600': 'rgba(0, 0, 0, 0.6)',
        'black-700': 'rgba(0, 0, 0, 0.7)',
        'black-800': 'rgba(0, 0, 0, 0.8)',
        'black-900': 'rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {

      },
      screens: {
        'xs': '280px',
        'sm': '540px',
        'md': '805px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
