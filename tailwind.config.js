/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
    },
    colors: {
      'bg-gray' : '#FAFAFE',
      'pegasus-yellow' : '#F4AE00',
      'pegasus-red' : '#DC2C2B',
      'pegasus-white':'#FFFFFF',
      'pegasus-yellow-200':'#fdcb6e',
    },
    extend: {
      fontFamily:{
        workSans:['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
