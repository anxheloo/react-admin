/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#2a3447",
        softBg: "#384256",
        darkBg: "#222b3c",
      },

      colors: {
        mainColor: "#FFFFFF",
        softColor: "#ddd",
        darkColor: "#2a3447",
      },
    },
  },
  plugins: [],
};
