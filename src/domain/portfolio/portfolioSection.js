export function createPortfolioSection({ id, title, subtitle, contentKey }) {
  if (!id || !title || !contentKey) {
    throw new Error("Invalid PortfolioSection");
  }

  return {
    id: String(id),
    title: String(title),
    subtitle: String(subtitle || ""),
    contentKey: String(contentKey),
  };
}

