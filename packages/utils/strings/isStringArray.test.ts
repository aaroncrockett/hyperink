import { describe, expect, it } from "vitest";
import { isStringArray } from "./index";

describe("isStringArray", () => {
  it("returns true for an array of strings", () => {
    expect(isStringArray(["hello", "world"])).toBe(true);
  });

  it("returns true for an empty array", () => {
    expect(isStringArray([])).toBe(true);
  });

  it("returns false for an array containing non-strings", () => {
    expect(isStringArray(["hello", 123])).toBe(false);
    expect(isStringArray([null])).toBe(false);
  });

  it("returns false for non-array values", () => {
    expect(isStringArray("hello")).toBe(false);
    expect(isStringArray(123)).toBe(false);
    expect(isStringArray(null)).toBe(false);
    expect(isStringArray(undefined)).toBe(false);
    expect(isStringArray({})).toBe(false);
  });
});
