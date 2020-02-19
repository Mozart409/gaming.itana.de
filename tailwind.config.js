// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      },
      colors:{
        'itana-blue': '#00457a'
      }
    }
  },
  variants: {
    h1: ["responsive", "hover", "default"],
    h2: ["responsive", "hover", "default"],
    h3: ["responsive", "hover", "default"]
  },
  plugins: [
    function({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.2xl") },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") }
      });
    }
  ]
};
