/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      base: { min: "320px", max: "600px" },
      sm: { min: "601px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      desk: { min: "1280px", max: "1535px" },
      desk2k: { min: "1536px" },
    },
    plugins: [],
  },
};
