import { useMemo } from "react";
import { deriveNavigationItemsFromSections } from "../../application/portfolio/getNavigationItems.js";
import { usePortfolioSections } from "./usePortfolioSections.js";

export function useNavigationItems() {
  const { sections, status, error } = usePortfolioSections();
  const items = useMemo(() => deriveNavigationItemsFromSections(sections), [sections]);
  return { items, status, error };
}

