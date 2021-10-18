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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
