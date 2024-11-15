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
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8c00ff',

          'primary-content': '#e5d9ff',

          secondary: '#dc0000',

          'secondary-content': '#ffd7d1',

          primary: '#0066ff',

          'primary-content': '#d0e3ff',

          secondary: '#009200',

          'secondary-content': '#000800',

          primary: '#0031ff',

          'primary-content': '#c9ddff',

          secondary: '#ff2d00',

          'secondary-content': '#160100',

          accent: '#008a00',

          'accent-content': '#000700',

          neutral: '#00252c',

          'neutral-content': '#c7cfd1',

          'base-100': '#152631',

          'base-200': '#112029',

          'base-300': '#0c1922',

          'base-content': '#cbcfd2',

          info: '#0096ff',

          'info-content': '#000816',

          success: '#3ede49',

          'success-content': '#011202',

          warning: '#ce6700',

          'warning-content': '#0f0400',

          error: '#d0001c',

          'error-content': '#fdd6d2',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
