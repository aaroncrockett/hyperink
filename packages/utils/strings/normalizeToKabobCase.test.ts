import { describe, expect, it } from "vitest";
import { normalizeToKabobCase } from "./index";

describe("normalizeToKabobCase", () => {
  it("converts a string to lowercase", () => {
    expect(normalizeToKabobCase("HELLO WORLD")).toBe("hello-world");
  });

  it("replaces spaces with hyphens", () => {
    expect(normalizeToKabobCase("hello world")).toBe("hello-world");
  });

  it("replaces multiple whitespace characters with a single hyphen", () => {
    expect(normalizeToKabobCase("hello   world\tagain")).toBe(
      "hello-world-again",
    );
  });

  it("trims leading and trailing whitespace", () => {
    expect(normalizeToKabobCase("  hello world  ")).toBe("hello-world");
  });

  it("returns an empty string for empty or whitespace-only input", () => {
    expect(normalizeToKabobCase("")).toBe("");
    expect(normalizeToKabobCase("   ")).toBe("");
  });

  it("converts existing hyphens into ~", () => {
    expect(normalizeToKabobCase("Hello-World! Test.")).toBe(
      "hello~world!-test.",
    );
  });
});
