export function getHrefWithSearchParams(
  href: string,
  searchParams: URLSearchParams,
) {
  const query = searchParams.toString();

  return query ? `${href}?${query}` : href;
}