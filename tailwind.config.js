/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
      },
      lineHeight: {
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        64: "64px",
        72: "72px",
      },
      colors: {
        blue: {
          50: "#E1E9EF",
          100: "#B5CBD6",
          200: "#84A3BB",
          300: "#527EA0",
          400: "#2D63BB",
          500: "#084777",
          600: "#07406F",
          700: "#663764",
          800: "#042F5A",
          900: "#022047",
        },
        gray: {
          50: "#E7E7E6",
          100: "#C2C2C1",
          200: "#9A9A98",
          300: "#72726F",
          400: "#535350",
          500: "#353531",
          600: "#30302C",
          700: "#282825",
          800: "#22221F",
          900: "#161613",
        },
        system: {
          red: "#C2050B", // Error
          green: "#07405F", // Success
          white: "#FFFFFF", // Primary Background
        },
        primary: {
          DEFAULT: "#084777",
          hover: "#042F5A",
          active: "#022047",
          disabled: "#A3B4C0",
        },
        secondary: {
          DEFAULT: "#E7E7E6",
          hover: "#C2C2C1",
          active: "#9A9A98",
          disabled: "#F5F5F5",
        },
      },
      spacing: {
        16: "16px",
        80: "80px",
      },
      screens: {
        mobile: "640px", // 모바일
        tablet: "768px", // 태블릿
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
