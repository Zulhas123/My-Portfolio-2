import React from "react";
import { AppContainerContext } from "./appContainerContext.js";

export function useAppContainer() {
  const container = React.useContext(AppContainerContext);
  if (!container) {
    throw new Error("App container not found. Wrap your app with <AppProviders />.");
  }
  return container;
}

