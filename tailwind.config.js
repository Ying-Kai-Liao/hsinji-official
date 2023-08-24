/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [`var(font-serif-korean)`, 'sans-serif'],
        sans: [`var(font-sans-korean)`, 'sans-serif'],
      },
    },
  },
  plugins: [],
}
