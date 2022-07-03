/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
