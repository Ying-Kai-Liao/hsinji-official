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
      animation: {
        'bubble': 'bubble 4s infinite'
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0', width: '20rem', height: '20rem' },
          '10%': { transform: 'translateY(0)', opacity: '0.6', width: '20rem', height: '20rem'},
          '100%': { transform: 'translateY(-100%)', opacity: '0', width: '30rem', height: '30rem' }
        }
      },
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(circle, rgba(255, 255, 255, 0.7), transparent)',
      }),
    },
  },
  plugins: [],
}
