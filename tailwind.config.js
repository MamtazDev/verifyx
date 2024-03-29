/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },

      boxShadow: {
        shadowOne: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {},
  plugins: [],
};
