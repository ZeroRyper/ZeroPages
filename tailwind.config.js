/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#000000",
      },
      fontFamily: {
        metal: ["Metal Mania", "sans-serif"],
        nosifer: ["Nosifer", "sans-serif"],
        bills: ["Stick No Bills", "sans-serif"],
        protest: ["Protest Revolution", " sans-serif"],
        sixtyfour:["Sixtyfour", "sans-serif"]
      },
    },
  },
  plugins: [],
};
