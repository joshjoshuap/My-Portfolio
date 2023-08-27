/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Roboto Slob', 'serif'],
    },
    colors: {
      black: '#040D12',
      gray: '#454545',
      white: '#EFF5F5',
      darkblue: '#27374D',
      blue: '#164B60',
      lightblue: '#3A98B9',
      darkorange: '#F97B22',
      orange: '#F29727',
      lightorange: '#FFB84C',
      darkgreen: '#379237',
      green: '#54B435',
      lightgreen: '#82CD47',
    },
  },
  plugins: [],
};
