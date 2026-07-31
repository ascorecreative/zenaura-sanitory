/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zenaura: {
          green: '#203A30',
          'green-accent': '#2D4F42',
          gold: '#C8A97E',
          'top-bar': '#F4F6F5',
          base: '#FFFFFF',
          frost: '#F4F6F5',
          obsidian: '#203A30',
          'obsidian-muted': '#4A5D56',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(200, 169, 126, 0.3)',
        'glass': '0 4px 20px rgba(32, 58, 48, 0.05)',
      }
    },
  },
  plugins: [],
}
