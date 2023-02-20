/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '85%': '85%',
      },
      maxHeight: {
        '90%': '90%',
      }
    }
  },
  plugins: [],
}
