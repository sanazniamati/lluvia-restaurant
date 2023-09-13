/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fff",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
