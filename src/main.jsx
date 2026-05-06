import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./presentation/AppRouter.jsx";
import { AppDataProviders, AppProviders } from "./presentation/di/AppProviders.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <AppDataProviders>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppDataProviders>
    </AppProviders>
  </React.StrictMode>
);
