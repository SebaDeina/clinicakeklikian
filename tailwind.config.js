/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06051a',
          900: '#0d0b2e',
          800: '#0C008E',
          700: '#1a164f',
          600: '#221d61',
        },
        brand: {
          pink: '#e879a0',
          'pink-light': '#f0a3c0',
          'pink-dark': '#c45980',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(6,5,26,0.85) 0%, rgba(6,5,26,0.6) 50%, rgba(6,5,26,0.4) 100%)',
      },
    },
  },
  plugins: [],
}
