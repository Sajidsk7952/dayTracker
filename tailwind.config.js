/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode : 'jit',
  theme: {
    extend: {
      colors:{primary: "#e34432",secondary:"#FFFFFF",},
      fontFamily:["Poppins","sans-serif"],
    },
    screens: {
      ms: "320px",
      mm: "375px",
      ml: "430px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};
