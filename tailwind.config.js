/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        typewriter: "typewriter",
      },
      backgroundImage: {
        test: "url('./assets/images/page_backgrounds/test.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
