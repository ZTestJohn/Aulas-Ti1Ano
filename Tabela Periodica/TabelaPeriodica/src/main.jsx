import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
