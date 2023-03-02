/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindForms = require('@tailwindcss/forms')({
  strategy: 'class',
});
const typography = require('@tailwindcss/typography');
const tailwindLineClamp = require('@tailwindcss/line-clamp');

const withOpacity =
  (variableName) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'form-active': 'var(--form-active)',
        'form-inactive': 'var(--form-inactive)',
        primary: {
          50: withOpacity('--color-primary-50'),
          100: withOpacity('--color-primary-100'),
          200: withOpacity('--color-primary-200'),
          300: withOpacity('--color-primary-300'),
          400: withOpacity('--color-primary-400'),
          500: withOpacity('--color-primary-500'),
          600: withOpacity('--color-primary-600'),
          700: withOpacity('--color-primary-700'),
          800: withOpacity('--color-primary-800'),
          900: withOpacity('--color-primary-900'),
        },
      },
      fontSize: {
        xxxs: [
          '0.62rem',
          {
            letterSpacing: '-0.01em',
          },
        ],
        xxs: [
          '0.65rem',
          {
            letterSpacing: '-0.01em',
          },
        ],
      },
      spacing: {
        104: '26rem',
        112: '28rem',
        120: '30rem',
        130: '35rem',
        140: '40rem',
        150: '45rem',
        160: '50rem',
        170: '55rem',
        180: '60rem',
      },
      screens: {
        xs: { max: '320px' },
        '3xl': { min: '2560px' },
        ...defaultTheme.screens,
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [tailwindForms, typography, tailwindLineClamp],
};
