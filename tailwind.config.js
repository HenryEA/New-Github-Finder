/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html",
  './src/**/*.js',
  './src/**/*.jsx'],
  
  theme: {
    extend: {
      // textColor:{
      //     white: '#ffffff'
      // },
    },
  },
  plugins: [require('daisyui')],
  
}

