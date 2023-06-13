/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // enabled: process.env.HUGO_ENVIRONMENT === 'production',
    enabled: true,
    content: ["./layouts/**/*.html", "./partials/**/*.html"],
  },
  theme: {
    extend: {
      colors: {
        "dark-green": "#01282A"
      },
      container: {
        center: true,
        screens: {
          '2xl':"1422px"
        }
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
