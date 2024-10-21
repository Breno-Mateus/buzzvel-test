/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        colorPrimary: '#ffff',
        textColor: '#0F172A',
        textColorSecondary: '#0369A1',
        colorButton: '#581C87',
        colorButtonSecondary: '#FCD34D',
      },
      gap : {
        '38': '38px',
      },
      fontSize: {
        '32px': '32px',
      },
      lineHeight: {
        '35.2px': '35.2px',
      },
      letterSpacing: {
        '0.5px': '0.5px',
      },
    },
  },
  plugins: [],
}

