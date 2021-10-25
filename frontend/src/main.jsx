import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import { ModalContextProvider } from "./components/Modals/ModalContext";
import { UserContextProvider } from "./context/user";

import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
