/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'], // must be the last plugin
};

module.exports = config;