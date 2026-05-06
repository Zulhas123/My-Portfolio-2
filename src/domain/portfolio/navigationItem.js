export function createNavigationItem({ id, label, path }) {
  if (!id || !label || !path) {
    throw new Error("Invalid NavigationItem");
  }

  return { id: String(id), label: String(label), path: String(path) };
}

