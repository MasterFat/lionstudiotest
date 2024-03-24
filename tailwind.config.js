/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Work_Sans: ["Work Sans", "sans-serif"],
        Space_Mono: ["Space Mono", "monospace"],
      },
    },
    plugins: [],
  },
}
