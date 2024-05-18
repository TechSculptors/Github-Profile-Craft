/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        primary: {
          100: "#fad8d0",
          200: "#f4b1a1",
          300: "#ef8a72",
          400: "#e96343",
          500: "#e43c14",
          600: "#b63010",
          700: "#89240c",
          800: "#5b1808",
          900: "#2e0c04",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
