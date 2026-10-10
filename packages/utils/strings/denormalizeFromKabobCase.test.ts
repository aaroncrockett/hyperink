import { describe, expect, it } from "vitest";
import { denormalizeFromKabobCase } from "./index";

describe("denormalizeFromKabobCase", () => {
  it("replaces hyphens with spaces", () => {
    expect(denormalizeFromKabobCase("hello-world", false)).toBe("hello world");
  });

  it("capitalizes each word by default", () => {
    expect(denormalizeFromKabobCase("hello-world")).toBe("Hello World");
  });

  it("does not capitalize when capitalize is false", () => {
    expect(denormalizeFromKabobCase("hello-world", false)).toBe("hello world");
  });

  it("replaces multiple hyphens with multiple spaces", () => {
    expect(denormalizeFromKabobCase("hello--world")).toBe("Hello  World");
  });

  it("handles strings without hyphens", () => {
    expect(denormalizeFromKabobCase("hello world")).toBe("Hello World");
  });

  it("handles an empty string", () => {
    expect(denormalizeFromKabobCase("")).toBe("");
  });

  it("handles leading and trailing hyphens", () => {
    expect(denormalizeFromKabobCase("-hello-world-")).toBe(" Hello World ");
  });

  it("converts ~ into -", () => {
    expect(denormalizeFromKabobCase("-hello~world-")).toBe(" Hello-world ");
  });

  it("does not capitalize words upon denormalizing when false is passed in as the second argument", () => {
    expect(denormalizeFromKabobCase("hello-world", false)).toBe("hello world");
  });

  it("does not capitalize words upon denormalizing when false is passed in as the second argument. Preservers OG capitalized letters", () => {
    expect(denormalizeFromKabobCase("hello-world-YaLl", false)).toBe(
      "hello world YaLl",
    );
  });
});
