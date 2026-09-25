export * from "./zod";
export * from "./types";

export function toLabelValue(value: string) {
  return {
    value,
    label: value
      .replace(/[_,-]|\+|-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  };
}
