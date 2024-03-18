/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customer/*.liquid",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-banner":
          "url('https://cdn.shopify.com/s/files/1/0484/1429/4167/files/website_1.png?v=1707913781')",
      },
      fontFamily: {
        "avenir-normal": ["avenir", "system-ui"],
      },
      screens: {
        "3xl": "1650px",
        "xl+": "1350px",
        "lg+": "1140px",
        "lg-": "1008px",
      },
    },
  },
  plugins: [],
};
