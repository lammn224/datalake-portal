/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryHover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        active: 'rgb(var(--color-active) / <alpha-value>)',
        inactive: 'rgb(var(--color-inactive) / <alpha-value>)',
        pending: 'rgb(var(--color-pending) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
