module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xl2: { min: "2560px" },
      xl: { min: "1920px", max: "2559px" },
      l2: { min: "1366px", max: "1919px" },
      l: { min: "1280px", max: "1365px" },
      m: { min: "1024px", max: "1279px" },
      sm: { min: "768px", max: "1023px" },
      xs: { max: "767px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
