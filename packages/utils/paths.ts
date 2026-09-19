export function getHrefWithSearchParams(
  href: string,
  searchParams: URLSearchParams,
) {
  const query = searchParams.toString();

  return query ? `${href}?${query}` : href;
}

export const getPathSegmentCount = (path: string) => {
  return path.split("/").filter(Boolean).length;
};

export const getPathSegments = (path: string) => {
  return path.split("/").filter(Boolean);
};
