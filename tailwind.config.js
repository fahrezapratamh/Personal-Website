
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'medium-bg':  'hsl(207, 8%, 92%)',
        'primary': '#212A3E',
         'title': 'hsl(207 12% 15%)',
         'body': 'hsl(207 100% 99%)',
         'lighten': 'hsl(207 8% 92%)',
         "text-color": "hsl(207,12%,45%)"
      },
      borderRadius: {
        "nyobain": "30% 70% 72% 28% / 30% 16% 84% 70% ",
        "50%": "50%",
      },
      fontFamily: {
        Poppins: ['Poppins'],
        Montserrat : ['Montserrat'],
        Darcy : ["mr-darcy"],
        Quicksand : ['Quicksand'],
      },
      gridTemplateColumns:{
        test: 'repeat(3, minmax(110px,1fr))',
        md : 'repeat(5, minmax(130px,1fr))',
      },
      backgroundColors:{
        primary: 'hsl(207 12% 15%)'
      },
      keyframes: {
        goyang : {
          '0%, 100%': {transform : "rotate(-3deg)"},
          '50%' : {transform : "rotate(3deg)"},
        },
        typing : {
          '0%' : {width : "0%"},
        },
        line : {
          "50%" : {color : "transparent"}
        }
      },
      animation : {
        goyang : "goyang 1s ease-in-out infinite",
        typing : 'typing 3s steps(14) infinite alternate',
        line : "line 1s infinite"
      }
    },
  },
}
