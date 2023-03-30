/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'attribution-blue': 'hsl(228, 45%, 44%)',
      }
    },
  },
  plugins: [],
}
