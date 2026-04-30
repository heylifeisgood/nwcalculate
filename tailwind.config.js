/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nw-primary': '#1a1a1a',
        'nw-secondary': '#2d2d2d',
        'nw-accent': '#d4af37',
        'nw-text': '#e5e5e5',
      },
    },
  },
  plugins: [],
}
