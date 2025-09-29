/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0B", 
          bone: "#F7F5F2",
          orange: {
            300: "#F2A65A",
            400: "#ED7A2B",
            500: "#E86810",
            600: "#D65A0A",
            700: "#B94C08"
          },
          graphite: {
            100: "#E5E6E7",
            500: "#6E7177",
            600: "#54565B",
            700: "#3A3C42",
            800: "#232428",
            900: "#121317"
          }
        },
        // Alias pour compatibilité avec l'ancien système
        primary: "#E86810",
        darkGray: "#232428",
        lightGray: "#E5E6E7",
        // Couleurs système pour les notifications
        green: {
          50: "#f0fdf4",
          200: "#bbf7d0",
          700: "#15803d"
        },
        red: {
          50: "#fef2f2",
          200: "#fecaca",
          700: "#b91c1c"
        },
      },
      outlineColor: {
        'brand-orange-700': '#B94C08',
      },
      borderRadius: {
        brand: "0.875rem"
      },
      boxShadow: {
        brand: "0 6px 18px rgba(0,0,0,.12)",
        brandSm: "0 3px 10px rgba(0,0,0,.10)"
      },
      backgroundImage: {
        "grad-hero-dark": "linear-gradient(180deg,rgba(10,10,11,.72) 0%,rgba(10,10,11,.45) 42%,rgba(10,10,11,.18) 100%)",
        "grad-graphite-soft": "linear-gradient(135deg,#121317 0%,#232428 60%,#1A1B1E 100%)",
        "grad-bone-wash": "linear-gradient(180deg,#FFFFFF 0%,#F7F5F2 100%)",
        "grad-orange-solid": "linear-gradient(180deg,#E86810 0%,#D65A0A 60%,#B94C08 100%)",
        "grad-orange-soft": "linear-gradient(135deg,#FFF3E8 0%,#FFE4CC 100%)",
        "grad-tech-line": "linear-gradient(90deg,transparent,rgba(214,90,10,.35),transparent)"
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(30,122,69,0)' },
          '50%': { boxShadow: '0 0 24px rgba(30,122,69,0.45)' },
        },
      },
      animation: {
        glow: 'glow 2.2s ease-in-out infinite',
      },
      fontFamily: {
        sans: [
          'var(--font-raleway)',
          'Raleway',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
        heading: [
          'var(--font-raleway)',
          'Raleway',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
