/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["Test Söhne", "sans-serif"],
      },
      keyframes: {
        slidUp: {
          from: {
            transform: "translate3d(-100%, 0, 0)",
            visiility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "slide-up": "slidUp .3s linear",
      },
    },
  },
  plugins: [],
};
