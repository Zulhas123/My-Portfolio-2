import React from "react";
import { PortfolioSectionsContext } from "../portfolio/portfolioSectionsContext.js";

export function usePortfolioSections() {
  const value = React.useContext(PortfolioSectionsContext);
  if (!value) {
    throw new Error("Portfolio sections not found. Wrap your app with <PortfolioDataProvider />.");
  }
  return value;
}
