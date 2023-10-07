/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    /**
     * Colors are defined in global.css
     * they are defined as CSS variables
     * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
     */
    colors: {
      background: 'rgb(var(--color-background) / <alpha-value>)',
      backgroundAlt: 'rgb(var(--color-background-alt) / <alpha-value>)',
      border: 'rgb(var(--color-border) / <alpha-value>)',
      foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
      info: 'rgb(var(--color-info) / <alpha-value>)',
      negative: 'rgb(var(--color-negative) / <alpha-value>)',
      positive: 'rgb(var(--color-positive) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      selected: 'rgb(var(--color-selected) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
    },
    extend: {
      // override the default utility class for `screen`
      height: {
        screen: 'var(--window-height)',
      },
      minHeight: {
        screen: 'var(--window-height)',
      },
    },
  },
};
