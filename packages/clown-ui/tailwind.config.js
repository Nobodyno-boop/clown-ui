/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...import('./src/lib/themes/tailwind'),
      },
    },
  },
  plugins: [],
}
