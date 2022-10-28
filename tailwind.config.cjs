/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url(./src/assets/developers.jpeg)",
      }
    }
  },
  plugins: [[require('prettier-plugin-tailwindcss')]]
}
