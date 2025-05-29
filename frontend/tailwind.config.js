/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#F9F7F3", // Haupt-Hintergrundfarbe
        charcoal: "#36454F", // Standard Textfarbe
        "heading-charcoal": "#2C3A47", // Dunklere Textfarbe für Überschriften
        "accent-coral": "#FF7F50", // Korallenrote Akzentfarbe
        "coral-light": "#FFE5D9", // Sehr helle Korallfarbe für subtile Hintergründe/Hover-Effekte
        subtle: "#D1D5DB", // Helles Grau für feine Linien oder Trenner
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"], // Schriftart für Überschriften
        body: ["Inter", "sans-serif"], // Schriftart für den Fließtext
      },
      boxShadow: {
        "glow-coral": "0 0 15px rgba(255, 127, 80, 0.35)", // Leuchteffekt in Koralle, etwas intensiver
        "subtle-dark": "0 4px 12px rgba(0, 0, 0, 0.08)", // Subtiler Schatten
        card: "0 2px 8px rgba(0, 0, 0, 0.06)", // Weicher Schatten für Karten
      },
      // Ggf. Keyframes für Animationen hier zentralisieren,
      // wenn sie nicht schon in index.css sind
    },
  },
  plugins: [],
};
