const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: {
    enabled: true,
    content: createGlobPatternsForDependencies(__dirname)
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};