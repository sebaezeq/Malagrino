/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#E9C7BE",
        cream: "#F8F3ED",
        navy: "#213956",
        abierto: "#55C73C",
        cerrado: "#C40B0B",
        pronto: "#F5D200",
      },
    },
  },
  plugins: [],
}
