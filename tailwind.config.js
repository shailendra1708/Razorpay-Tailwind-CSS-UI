/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html", // Ensure this points to the correct index.html file
    "./src/**/*.{html,css,js}", // Scan all files in the src folder
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        black: '#000000',
        blueLink: '#0000ee',
        greenDark: '#006c3f',
        green: '#008743',
        greenLight: '#009e5c',
        slateBlue: '#768ea7',
        lightBlueGray: '#8794a7',
        paleBlueGray: '#8996a9',
        navy: '#132644',
        limeGreen: '#c6f076',
        brightBlue: '#1566f1',
        silver: '#dfe3e9',
        lightGray: '#f1f5fa', // Keeping this definition
        softWhite: '#f8fafc',
        darkSlate: '#192839',
        pastelRed: '#ffbfbf',
        white: '#ffffff',
        deepNavy: '#032a3e',
        darkGray: '#222222',
        royalBlue: '#2950da',
        vibrantBlue: '#305eff',
        steelGray: '#40566d',
        blueGray: '#435774',
        grayishBlue: '#5d6d86',
        deepBlue: '#02042a',
        lightBlue: '#2b84ea',
        lightBlue300: '#4b94ed',
        lightBlue500: '#0b72e7',
        grayText: '#818597',
        headGray: '#222222',
        gray2: '#525a76',
        deepBlueHead: "#162f56",
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        ubuntu: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
