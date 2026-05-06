import { createGetPortfolioSections } from "../../application/portfolio/getPortfolioSections.js";
import { createStaticPortfolioRepository } from "../../infrastructure/portfolio/staticPortfolioRepository.js";

export function createAppContainer() {
  const portfolioRepository = createStaticPortfolioRepository();

  return {
    portfolioRepository,
    getPortfolioSections: createGetPortfolioSections({ portfolioRepository }),
  };
}

