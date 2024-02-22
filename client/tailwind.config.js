/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        yellow: {
          50: "#FBF5EC",
          100: "#F4E1C3",
          200: "#EED2A6",
          300: "#E6BD7D",
          400: "#E1B164",
          500: "#DA9D3D",
          600: "#C68F38",
          700: "#9B6F2B",
          800: "#785622",
          900: "#5C421A",
        },
      },
    },
  },
  plugins: [],
};
