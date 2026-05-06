/**
 * Application boundary: repository interface (Dependency Inversion).
 * Infrastructure provides an implementation.
 */

/**
 * @typedef {Object} PortfolioSection
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} contentKey
 */

/**
 * @typedef {Object} PortfolioRepository
 * @property {() => Promise<PortfolioSection[]>} getSections
 */

export {};
