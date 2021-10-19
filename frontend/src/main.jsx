import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import { ModalContextProvider } from "./components/Modals/ModalContext";

import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
