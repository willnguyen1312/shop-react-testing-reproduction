import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import i18n from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={i18n}>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
