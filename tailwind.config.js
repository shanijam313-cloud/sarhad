
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#0d5c3d',
          light: '#1a7a52',
          dark: '#083d28',
        },
        'gold': {
          DEFAULT: '#ffd700',
          light: '#ffe44d',
          dark: '#b39700',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
