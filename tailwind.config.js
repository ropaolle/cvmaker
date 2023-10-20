/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // width: {
      //   a4: '210mm',
      // },
      // height: {
      //   a4: '297mm',
      // },
      screens: {
        'print': { 'raw': 'print' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

