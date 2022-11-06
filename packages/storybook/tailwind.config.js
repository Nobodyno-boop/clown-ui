const colors = require('@poulpi/clown-ui/lib/cjs/lib/themes/tailwind')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/*.{js,jsx,ts,tsx}',
    '../../node_modules\\@poulpi\\clown-ui\\**\\*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
