/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "clamp(0.1rem, -0.01vw + 0.9rem, 0.89rem)",
        sm: "clamp(0.5rem, -0.01vw + 0.9rem, 0.89rem)",
        base: "clamp(1.13rem, 0.06vw + 1.1rem, 1.19rem)",
        lg: "clamp(1.41rem, 0.16vw + 1.33rem, 1.58rem)",
        xl: "clamp(1.76rem, 0.31vw + 1.61rem, 2.11rem)",
        "2xl": " clamp(2.2rem, 0.55vw + 1.93rem, 2.81rem)",
        "3xl": " clamp(2.75rem, 0.9vw + 2.32rem, 3.75rem)",
        "4xl": " clamp(3.43rem, 1.4vw + 2.76rem, 5rem)",
        "5xl": "clamp(4.29rem, 2.12vw + 3.28rem, 6.66rem)",
        "6xl": "clamp(5.36rem, 3.14vw + 3.86rem, 8.88rem)",
      },
      colors: {
        backColor: "#000000",
      },
      fontFamily: {
        metal: ["Metal Mania", "sans-serif"],
        nosifer: ["Nosifer", "sans-serif"],
        bills: ["Stick No Bills", "sans-serif"],
        protest: ["Protest Revolution", " sans-serif"],
        sixtyfour: ["Sixtyfour", "sans-serif"],
      },
    },
  },
  plugins: [],
};
