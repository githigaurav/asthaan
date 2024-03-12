/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryBg":"#ffffff",
        "secondaryBg":"#f5f7fb",
        "primaryBtn":"#3270fc",
        "primaryHead":"#144273",
        "secondaryHead":"#3270fc",
        "primaryTxt":"#757b8d",
        "secondaryTxt":"#878fa9"
      }
    },
  },
  plugins: [],
}

