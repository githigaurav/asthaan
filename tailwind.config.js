/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryBg":"#faf8ff",
        "primaryBtn":"#5f449b",
        "secondaryBtn":"#f3ebff",
        "primaryHead":"#333333",
        "primaryText":"#666"
      }
    },
  },
  plugins: [],
}

