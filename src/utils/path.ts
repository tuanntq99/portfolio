/**
 * Safely resolves an asset or route path with Astro's configured BASE_URL.
 * Supports GitHub Pages subpath (e.g. /portfolio) as well as root/custom domains.
 */
export function withBase(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') || 
    path.startsWith('https://') || 
    path.startsWith('mailto:') || 
    path.startsWith('tel:') || 
    path.startsWith('#')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (base && cleanPath.startsWith(base)) {
    return cleanPath;
  }

  return `${base}${cleanPath}`;
}
