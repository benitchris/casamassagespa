// Prefix public assets so the build works from any GitHub Pages path.
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
