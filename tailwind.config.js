module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "maxWidth": "100%",
          "marginLeft": "auto",
          "marginRight": "auto",
          "paddingLeft": "1rem",
          "paddingRight": "1rem",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1248px",
          },
          "@screen 2xl": {
            maxWidth: "1248px",
          },
        },
      });
    },
  ],
}
