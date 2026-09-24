import { describe, expect, it } from "vitest";
import { mapInsertsToDb, mapSelectsToDb, extractSelect } from "./helpers";

describe("mapInsertsToDb", () => {
  it("maps keys using uiDbMapping", () => {
    const inserts = [{ profile_id: "123" }];
    const map = {
      toUi: "profile_id",
      toDb: "user_id",
    };

    expect(mapInsertsToDb(inserts, map)).toEqual([
      {
        user_id: "123",
      },
    ]);
  });

  it("maps multiple inserts using uiDbMapping", () => {
    const inserts = [
      {
        profile_id: JSON.stringify("123"),
      },
      {
        tag_opts: JSON.stringify({
          collections: ["collection-a", "collection-b"],
          styles: ["style-a"],
          tags: ["tag-a", "tag-b"],
        }),
      },
    ];

    const map = {
      toUi: "profile_id",
      toDb: "user_id",
    };

    expect(mapInsertsToDb(inserts, map)).toEqual([
      { user_id: '"123"' },
      {
        user_id: JSON.stringify({
          collections: ["collection-a", "collection-b"],
          styles: ["style-a"],
          tags: ["tag-a", "tag-b"],
        }),
      },
    ]);
  });

  describe("extractSelect", () => {
    it("joins multiple select keys", () => {
      expect(extractSelect(["profile_id", "tag_opts", "profile_opts"])).toBe(
        "profile_id,tag_opts,profile_opts",
      );
    });

    it("returns a single key unchanged", () => {
      expect(extractSelect(["profile_id"])).toBe("profile_id");
    });

    it("returns * when no select keys are provided", () => {
      expect(extractSelect([])).toBe("*");
    });
  });
});

describe("mapSelectsToDb", () => {
  it("maps select keys using uiDbMapping", () => {
    const selectKeys = ["profile_id", "tag_opts"];
    const map = {
      toUi: "profile_id",
      toDb: "user_id",
    };

    expect(mapSelectsToDb(selectKeys, map)).toEqual(["user_id", "user_id"]);
  });

  it("returns empty strings when no mapping is provided", () => {
    const selectKeys = ["profile_id", "tag_opts"];

    expect(mapSelectsToDb(selectKeys)).toEqual(["", ""]);
  });

  it("returns an empty array when no select keys are provided", () => {
    expect(mapSelectsToDb([])).toEqual([]);
  });
});
