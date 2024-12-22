/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        default: "#212529",
        heading: "#535353",
        accent: "#465367",
        contrast: "#ffffff",
      },
      fontFamily: {
        default: ['"EB Garamond"', ...defaultTheme.fontFamily.sans],
        heading: ['"EB Garamond"', ...defaultTheme.fontFamily.sans],
        nav: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
