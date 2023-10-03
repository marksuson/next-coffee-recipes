/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: "#3d2b1f",
          400: "#4a3527",
          300: "#5b4635",
          200: "#6c5743",
        },
      },
    },
  },
  plugins: [],
};
