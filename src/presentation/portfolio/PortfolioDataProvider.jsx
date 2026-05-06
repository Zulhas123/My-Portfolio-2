import React, { useEffect, useMemo, useState } from "react";
import { PortfolioSectionsContext } from "./portfolioSectionsContext.js";
import { useAppContainer } from "../di/useAppContainer.js";

export function PortfolioDataProvider({ children }) {
  const { getPortfolioSections } = useAppContainer();
  const [sections, setSections] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getPortfolioSections()
      .then((result) => {
        if (cancelled) return;
        setSections(result);
        setStatus("success");
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [getPortfolioSections]);

  const value = useMemo(() => ({ sections, status, error }), [sections, status, error]);

  return <PortfolioSectionsContext.Provider value={value}>{children}</PortfolioSectionsContext.Provider>;
}

