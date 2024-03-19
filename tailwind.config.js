/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6200",
          50: "#FFD3B8",
          100: "#FFC6A3",
          200: "#FFAD7A",
          300: "#FF9452",
          400: "#FF7B29",
          500: "#FF6200",
          600: "#C74C00",
          700: "#8F3700",
          800: "#572100",
          900: "#1F0C00",
          950: "#030100",
        },
        secondary: "#F6F6F6",
        tertiary: "#498FF8",
        ["font-color-primary"]: "#242424",
        ["font-color-secondary"]: "#444444",
        ["font-accent-1"]: "#acacac",
        ["font-accent-2"]: "#555",
        ["main-foreground"]: "#ffffff",
        ["main-foreground-2"]: "#f5f5f5",
        ["stroke-primary"]: "#EDEDED",
        ["label-color"]: "#929292",
        ["icon-color"]: "#323232",
        ["navigation-icon-color"]: "#999999",
        ["mobile-navigation-menu-color"]: "#FBFBFB",
        ["message-foreground"]: "#FFF0E6",
        ["navbar-foreground"]: "#F2F4F7",
      },
      padding: {
        7.5: "1.875rem",
      },
      margin: {
        7.5: "1.875rem",
      },
      lineHeight: {
        normal: "normal",
      },
      fontSize: {
        "2.5xl": ["28px", "34px"],
      },
      screens: {
        xs: { max: "475px" },
        "-md": { max: "767px" },
        short: { raw: "(max-height: 600px)" },
      },
    },
  },
  plugins: [],
}

