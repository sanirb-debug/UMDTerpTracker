/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // University of Maryland
        terp: {
          red: '#E21833',
          gold: '#FFD200',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
