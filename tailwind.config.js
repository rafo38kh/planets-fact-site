/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      antonio: ["var(--font-antonio)"],
      spartan: ["var(--font-spartan)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-stars": "url('/assets/background-stars.svg')",
      },
      colors: {
        background: "hsla(240, 67%, 8%, 1)",
        btnActive: "hsla(194, 48%, 50%, 1)",
        btnHover: "hsl(240deg 19% 24%)",
        lightWhite: "hsla(0, 0%, 100%, 1)",
        lightSilver: "hsla(240, 6%, 54%, 1)",
        border: "#979797",
        darkSilver: "hsla(240, 17%, 26%, 1)",
      },
    },
  },

  plugins: [],
};
