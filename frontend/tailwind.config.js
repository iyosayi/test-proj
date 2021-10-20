module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "hsl(212deg 100% 97%)",
        overlay: "hsl(213deg 100% 29% / 78%)",
        hover: "hsl(213deg 66% 92%)",
        icon: "hsl(216deg 25% 46%)",
        header: "hsl(213deg 100% 29%)",
        button: "rgb(0 67 148)",
        nav: {
          hover: "hsl(213deg 66% 92%/ 0.4)",
        },
        text: {
          header: "#1a3651",
          paragraph: "#40515b",
          primary: "#0f6fff",
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
