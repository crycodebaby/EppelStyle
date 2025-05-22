/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5757", // Korallenrot
        secondary: "#E31C1C", // Knallrot
        accent: "#FFF8E1", // Weiches Creme-Gelb
        text: "#1A1A1A", // Tiefschwarz
        background: "#F5F5F5", // Helles Grauweiß
        heading: "#1A3C34", // Dunkles Tannengrün
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
