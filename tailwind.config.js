const { createGlobPatternsForDependencies } = require('@nx/vue/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'apps/**/index.html'),
    join(__dirname, 'libs/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}'),
  ],
  theme: {
    extend: {},
  },daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0077ff",

          "secondary": "#bc8400",

          "accent": "#00dd8c",

          "neutral": "#130300",

          "base-100": "#fffbf4",

          "info": "#006ad9",

          "success": "#009873",

          "warning": "#a64900",

          "error": "#ff5277",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
