 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   darkMode : 'class',
   theme: {
     extend: {
      screens: {
        "other" : {'min': '340px', 'max':'1200px'},
      }
     },
   },
   plugins: [],
 }