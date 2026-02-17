/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C5D', // Deep Navy
          dark: '#082d46',
        },
        secondary: {
          DEFAULT: '#F2A900', // Bright Gold
          light: '#ffc12e',
        },
        accent: {
          DEFAULT: '#4AA3DF', // Sky Blue
        },
        nearBlack: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
