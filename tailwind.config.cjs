/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0a0a0a",
        secondary: "#a3a3a3",
        accent: "#6366f1",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(147,51,234,0.05))",
      },
    },
  },
  plugins: [],
};
