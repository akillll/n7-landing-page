/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#000D12"
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        mono: ["Chivo Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

