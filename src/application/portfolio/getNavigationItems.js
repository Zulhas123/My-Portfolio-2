import { createNavigationItem } from "../../domain/portfolio/navigationItem.js";

/**
 * @typedef {Object} NavigationItem
 * @property {string} id
 * @property {string} label
 * @property {string} path
 *
 * @typedef {Object} PortfolioSection
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {string} contentKey
 */

/**
 * Use case: derive navigation items from sections.
 * @param {PortfolioSection[]} sections
 * @returns {NavigationItem[]}
 */
export function deriveNavigationItemsFromSections(sections) {
  return sections.map((s) =>
    createNavigationItem({
      id: s.id,
      label: s.title,
      path: `/${s.id === "home" ? "home" : s.id}`,
    })
  );
}
