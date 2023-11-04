/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1140px",
    },
    extend: {
      colors: {
        "clr-primary": "#f8d7a4",
        "clr-heading": "#a55c30",
        "clr-bg-primary": "#232730",
        "clr-text": "#232222",
        "clr-tertiary": "#c7763e",
      },
    },
  },
  plugins: [],
};
