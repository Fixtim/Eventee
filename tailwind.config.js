/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#394CFE',
        gray: '#828282',
        grey: '#4F4F4F',
        white: '#fff',
        black: '#0B0D17',
        dark: '#171717',
      },
      fontFamily: {
        Inter: ["Inter", "serif"]
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    }
  },
  plugins: []
} 


