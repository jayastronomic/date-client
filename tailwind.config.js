/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ["slide-up"]: {
          "0%": { top: "100%" },
          "100%": { top: "0%" },
        },
        ["slide-down"]: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.14s ease-out forwards",
        "slide-down": "slide-down 0.14s forwards",
      },
    },
  },
  plugins: [],
};
