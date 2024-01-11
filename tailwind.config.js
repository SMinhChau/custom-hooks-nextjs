/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "hsl(var(--background-primary))",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "color-submit": "hls(var(--btn-submit))",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [{ "postcss-import": {}, tailwindcss: {}, autoprefixer: {} }],
};
