/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        test: "url('./assets/images/page_backgrounds/test.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
