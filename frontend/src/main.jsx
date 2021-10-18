import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ModalContextProvider } from "./components/Modals/ModalContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
