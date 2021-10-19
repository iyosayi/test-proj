module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0071ff",
        overlay: "hsl(213deg 100% 29% / 78%)",
        header: "hsl(213deg 100% 29%)",
        button: "rgb(0 67 148)",
        text: {
          header: "#1a3651",
          paragraph: "#40515b",
        },
        modal: {
          infoBackground: "#f2f4f7",
          backdrop: "rgba(0,0,0,.57)",
        },
      },
      boxShadow: {
        error: "0 0 6px -1px #cc0000",
      },
      animation: {
        save: "save 0.3s ease-in-out",
        unsave: "unsave 0.3s ease-in-out",
      },
      keyframes: {
        save: {
          "0%": { transform: "scale(1)", fill: "#ffd700", fillOpacity: "0" },
          "50%": {
            transform: "scale(1.5)",
            fill: "#706392",
            fillOpacity: "0.5",
          },
          "100%": { transform: "scale(1)", fill: "#ffd700", fillOpacity: "1" },
        },
        unsave: {
          "0%": { transform: "scale(1)", fill: "#ffd700", fillOpacity: "1" },
          "50%": {
            transform: "scale(0.5)",
            fill: "#ffd700",
            fillOpacity: "0.5",
          },
          "100%": { transform: "scale(1)", fill: "#ffd700", fillOpacity: "0" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
