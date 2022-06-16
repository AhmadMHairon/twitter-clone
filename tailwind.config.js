/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#1da1f2",
      },
      animation: {
        "spin-once": "spin 1s linear 1",
      },
    },
  },
  plugins: [],
};
