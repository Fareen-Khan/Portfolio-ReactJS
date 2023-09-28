/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#808080',
        'dark': ' #101010',
      },
    },
    fontFamily: {
      sans : ['Quicksand'],
    },
  },
  plugins: [],
}

