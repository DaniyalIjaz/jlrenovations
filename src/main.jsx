import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SiteToastProvider } from "./components/SiteToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiteToastProvider>
      <App />
    </SiteToastProvider>
  </StrictMode>
);
