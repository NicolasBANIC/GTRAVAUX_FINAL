/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50', // Steel blue comme couleur principale/accents
        black: '#000000',   // Noir pour les titres
        white: '#FFFFFF',   // Blanc pour les fonds
        darkGray: '#333333',
        lightGray: '#F5F5F5',
        steelBlue: '#2C3E50', // alias pratique
        green: '#1E7A45'     // Boutons/CTAs importants
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
