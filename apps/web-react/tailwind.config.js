/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f77039',
        primaryBorder:'#ff5c00',
        customBlack:'#030100',
        customGrey:'#15130f',
      }
    },
  },
  plugins: [],
}

