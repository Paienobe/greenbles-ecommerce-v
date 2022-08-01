/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tahiti: {
          secondary: '#5B5B5B',
          DEFAULT: '#85C226',
          uni: '#F5F1ED',
          green: '#85C226',
          grey: '#C4C4C4',
          // gblesGreen: "#85C226",
          gblesGreyAlt: '#C4C4C4',
          gblesForm: 'rgba(65, 6, 54, 0.05)',
        },
      },
      backgroundImage: {
        'hero-img': "url('/assets/bg_1.jpeg')",
        'hero-image': "url('/assets/bg_2.jpg')",
      },
      screens: {
        sm: { max: '576px' },
      },
    },
  },

  plugins: [],
}
