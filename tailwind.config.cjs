/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      p1: "#315098",
      p2: "#8ca8be",
      s1: "#afbdb0",
      s2: "#739c76",
      t1: "#e4c0be",
      t2: "#fbd0e0",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
    },
  },
  plugins: [],
};
