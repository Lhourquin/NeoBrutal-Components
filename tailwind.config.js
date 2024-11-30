/** @type {import('tailwindcss').Config} */
const colors = ["orange", "red", "cyan", "lime", "pink", "violet", "yellow"];
const safelist = [
  ...colors.flatMap((color) => [
    `neo-bg-${color}-200`,
    `neo-bg-${color}-300`,
    `neo-bg-${color}-400`,
    `hover:neo-bg-${color}-400`,
    `focus:neo-bg-${color}-200`,
    `active:neo-bg-${color}-400`,
  ]),
  "neo-rounded-sm",
  "neo-rounded-md",
  "neo-rounded-lg",
  "neo-rounded-full",
  "neo-rounded-none",
];
module.exports = {
  prefix: "neo-",
  content: ["./projects/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  safelist,
  theme: {
    extend: {
      colors: {
        violet: {
          200: "#A8A6FF",
          300: "#918efa",
          400: "#807dfa",
        },
        pink: {
          200: "#FFA6F6",
          300: "#fa8cef",
          400: "#fa7fee",
        },
        red: {
          200: "#FF9F9F",
          300: "#fa7a7a",
          400: "#f76363",
        },
        orange: {
          200: "#FFC29F",
          300: "#FF965B",
          400: "#fa8543",
        },
        yellow: {
          200: "#FFF066",
          300: "#FFE500",
          400: "#FFE500",
        },
        lime: {
          200: "#B8FF9F",
          300: "#9dfc7c",
          400: "#7df752",
        },
        cyan: {
          200: "#A6FAFF",
          300: "#79F7FF",
          400: "#53f2fc",
        },
      },
    },
  },
  plugins: [],
};
