/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /**
       * Colors are defined in global.css
       * they are defined as CSS variables
       * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
       */
      colors: {
        primary: 'rgb(var(--color-primary) / var(--alpha-value))',
        foreground: 'rgb(var(--color-foreground) / var(--alpha-value))',
        background: 'rgb(var(--color-background) / var(--alpha-value))',
        backgroundAlt: 'rgb(var(--color-background-alt) / var(--alpha-value))',
        positive: 'rgb(var(--color-positive) / var(--alpha-value))',
        negative: 'rgb(var(--color-negative) / var(--alpha-value))',
        warning: 'rgb(var(--color-warning) / var(--alpha-value))',
        info: 'rgb(var(--color-info) / var(--alpha-value))',
      },
    },
  },
  plugins: [],
};
