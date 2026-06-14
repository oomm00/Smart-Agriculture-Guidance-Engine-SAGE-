/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6EC',
        forest: '#2F4F33',
        harvest: '#E0A458',
        terracotta: '#C8714D',
        ink: '#2D2A26'
      },
      fontFamily: {
        fraunces: ['"Fraunces"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
