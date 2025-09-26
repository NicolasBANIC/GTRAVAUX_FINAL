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
        // Palette harmonisée inspirée de la maquette: bleu pétrole + orange chaud
        primary: {
          DEFAULT: '#163B4D', // bleu pétrole principal
          900: '#0F2C3A',
          800: '#143444',
          700: '#1E4B60',
          600: '#275E77',
          300: '#3A6F84',
          200: '#5B8CA2',
        },
        black: '#0B0B0B',
        white: '#FFFFFF',
        darkGray: '#0F2C3A', // texte foncé sur fond clair
        lightGray: '#F1F5F9', // slate-100
        steelBlue: '#163B4D', // rétrocompatibilité (ancien naming)
        green: '#10B981', // conserve le vert pour les toasts "success" existants
        // Palettes utilisées dans globals.css (@apply ...-accent-..., ...-success-...)
        // Accent = déclinaisons de bleu pétrole (boutons principaux)
        accent: {
          300: '#5B8CA2',
          400: '#3A6F84',
          500: '#275E77',
          600: '#1E4B60',
          700: '#143444',
        },
        // Success (réutilisé pour les callouts d'urgence) = orange chaud
        success: {
          400: '#D88A3D',
          600: '#A65816',
        },
        brand: {
          orange: '#B7671B',
        },
      },
      boxShadow: {
        // Ombres "premium" utilisées dans globals.css (adoucies)
        premium:
          '0 8px 16px -10px rgba(30, 122, 69, 0.18), 0 6px 12px -12px rgba(44, 62, 80, 0.18)',
        'premium-lg':
          '0 16px 28px -12px rgba(30, 122, 69, 0.22), 0 10px 20px -16px rgba(44, 62, 80, 0.22)',
        glass: '0 8px 20px rgba(0,0,0,0.06)',
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
