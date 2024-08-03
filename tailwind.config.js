/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluetextcolor1: "#7E22CE",
        greaytextcolor2: "#838383",
        blacktextcolor3: "#3C3C3C",
        blackbackground: "#211935",
        whitetextcolor3: "#F8F8F8",

        // add more colors 
      },
    },
  },
  plugins: [],
};
