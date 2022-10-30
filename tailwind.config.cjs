/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url(./src/assets/developers.jpeg)",
      },
      colors: {
        'openbootcamp-green': '#0ce78f',
        'openbootcamp-blue-light':'#047af3',
        'openbootcamp-blue-dark': '##161053'
      },
      container: {
        'container-custom': {
          width:'100%',
          'max-width':'100%',
        }
      }
    }
  },
  plugins: [[require('prettier-plugin-tailwindcss')]]
}
