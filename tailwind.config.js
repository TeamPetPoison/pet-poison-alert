/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / var(--alpha-value))',
        foreground: 'rgb(var(--color-foreground) / var(--alpha-value))',
        background: 'rgb(var(--color-background) / var(--alpha-value))',
        positive: 'green',
        negative: 'red',
        warning: 'yellow'
      }
    }
  },
  plugins: [],
}

