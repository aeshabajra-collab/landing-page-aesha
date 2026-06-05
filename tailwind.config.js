/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      colors: {
        ink: "#26231e",
        charcoal: "#35322b",
        mist: "#f8f7f4",
        pearl: "#ffffff",
        line: "#e7e2d9",
        sage: "#7d8770",
        blossom: "#d7c9ba"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(38, 35, 30, 0.10)"
      }
    }
  },
  plugins: []
};
