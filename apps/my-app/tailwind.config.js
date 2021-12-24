const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

const nxDeps = createGlobPatternsForDependencies(__dirname); // dirname = apps/my-app
const content = [
  ...nxDeps,
  "./src/**/*.tsx"
];
console.log("nxDeps", nxDeps);
console.log("content", content);

module.exports = {
  purge: {
    enabled: true,
    content,
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