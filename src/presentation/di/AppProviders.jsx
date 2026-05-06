import React, { useMemo } from "react";
import { createAppContainer } from "./createAppContainer.js";
import { AppContainerContext } from "./appContainerContext.js";
import { PortfolioDataProvider } from "../portfolio/PortfolioDataProvider.jsx";

export function AppProviders({ children }) {
  const container = useMemo(() => createAppContainer(), []);
  return <AppContainerContext.Provider value={container}>{children}</AppContainerContext.Provider>;
}

export function AppDataProviders({ children }) {
  return (
    <PortfolioDataProvider>
      {children}
    </PortfolioDataProvider>
  );
}
