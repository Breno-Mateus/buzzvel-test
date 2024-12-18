/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        colorPrimary: '#FFFFFF',
        textColor: '#0F172A',
        textColorSecondary: '#0369A1',
        colorButton: '#581C87',
        colorButtonSecondary: '#FCD34D',
        textColorOther: '#D97706',
        textColorHoverButton: '#78350F',
        colorSection: '#7E22CE',
        colorTextSecondary: '#475569',
      },
    },
  },
  plugins: [],
}

