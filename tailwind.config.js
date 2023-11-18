/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0c0f0a',
        gray: '#D8D9DA',
        white: '#F5F5F5',
        skywhite: '#EFF5F5',
        darkblue: '#27374D',
        blue: '#001524',
        lightblue: '#39A7FF',
        darkorange: '#F97B22',
        orange: '#F29727',
        lightorange: '#FFB84C',
        darkgreen: '#379237',
        green: '#54B435',
        lightgreen: '#82CD47',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['Roboto', 'mono'],
      serif: ['Roboto Slab', 'serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
