/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary': {
          '50': '#f0faff',
          '100': '#e1f3fd',
          '200': '#bce8fb',
          '300': '#80d7f9',
          '400': '#3dc3f3',
          '500': '#13a4d9', // main
          '600': '#078ac2',
          '700': '#076e9d',
          '800': '#0a5d82',
          '900': '#0f4d6b',
          '950': '#0a3247',
        },
        'secondary': {
          '50': '#edfde8',
          '100': '#d9f9ce',
          '200': '#c1f5b1', // main
          '300': '#88e96d',
          '400': '#5fdb40',
          '500': '#40c022',
          '600': '#2c9a16',
          '700': '#247516',
          '800': '#215d17',
          '900': '#1f4f18',
          '950': '#0b2b08',
        },
      }
    },
  },
  plugins: [],
}

