/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        accent: "#14b8a6",
      },
    },
  },
  plugins: [],
}