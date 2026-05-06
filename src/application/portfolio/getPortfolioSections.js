/**
 * @typedef {import("./portfolioRepository.js").PortfolioRepository} PortfolioRepository
 */

/**
 * Use case: fetch portfolio sections.
 * @param {{ portfolioRepository: PortfolioRepository }} deps
 */
export function createGetPortfolioSections({ portfolioRepository }) {
  return async function getPortfolioSections() {
    return await portfolioRepository.getSections();
  };
}

