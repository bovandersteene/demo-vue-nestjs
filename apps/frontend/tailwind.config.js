const { createGlobPatternsForDependencies } = require('@nx/vue/tailwind');
const { join } = require('path');

const sharedTailwindConfig = require('../../tailwind.config');


/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    ...sharedTailwindConfig.content,
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

};

