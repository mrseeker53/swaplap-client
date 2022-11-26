/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        swaptheme: {
          primary: "#74afc9",
          secondary: "#25d3b0",
          accent: "#e5f1f7",
          neutral: "#4f5b71",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
