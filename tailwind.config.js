/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#2a2a2a",
        },
        white: {
          DEFAULT: "#EDEDED",
        },
        green: {
          DEFAULT: "#C1E693",
        },
        primary: {
          DEFAULT: "#5F7FF8",
          100: "#9AACEF",
        },
        tertiary: {
          DEFAULT: "#C6B9EE",
        },
      },
    },
  },
  plugins: [],
};
