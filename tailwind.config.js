/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Nunito Sans"',],
    },
    extend: {
      colors: {
        'dark-element' : '#2b3945',
        'dark-bg' : '#202c37',
        'light-text' : '#111517',
        'light-input' : '#858585',
        'light-bg' : '#fafafa',
      },
    },
  },
  plugins: [],
}