import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO: add a layout wrapper ? */}
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <App />
    </div>
  </StrictMode>
);
