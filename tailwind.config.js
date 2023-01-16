/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF3811",

          "secondary": "#c7ed8b",

          "accent": "#4ff283",

          "neutral": "#1E2329",

          "base-100": "#F3F0F4",

          "info": "#F3F0F4",

          "success": "#51E194",

          "warning": "#ECAB32",

          "error": "#FF3811",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
