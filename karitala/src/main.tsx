import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className="text-text font-inter bg-[FFDDF1]"
      style={{
        background:
          "linear-gradient(180deg,rgba(255, 221, 241, 1) 0%, rgba(210, 218, 221, 1) 40%",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
