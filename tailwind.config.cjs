/**** tailwind.config.cjs ****/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#6C5CE7", dark: "#4D3FD1", light: "#EEF0FF" },
        ink: { 900: "#0B1020", 700: "#1D2438", 500: "#3C4663", 300: "#7C89A8" },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [],
};
