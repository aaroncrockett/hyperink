export const extractSelect = (selectKeys: string[]) =>
  selectKeys.length ? selectKeys.join(",") : "*";
