import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Web3ModalProvider from "./providers/Web3ModalProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Web3ModalProvider>
        <App />
      </Web3ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
