import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./reset.scss";
import { AppRoot } from "@telegram-apps/telegram-ui";
import App from "./App.tsx";
import eruda from "eruda";
import "@telegram-apps/telegram-ui/dist/styles.css";

import "./custom.scss";

eruda.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </StrictMode>
);
