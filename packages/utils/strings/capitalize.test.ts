import { describe, expect, it } from "vitest";
import { capitalize } from "./index";

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("leaves the rest of the string unchanged", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  it("handles an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
