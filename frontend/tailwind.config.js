/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        Fonty: ["EB Garamond", "sans-serif"],
        FleurDeLeah: ["Fleur De Leah", "serif"],
      },
    },
  },
  plugins: [],
};
