"use client";
// import { useState } from "react";
import { EDITABLE_COLS } from "@inktree/db";

type FormDataProps = {
  styles: string[];
  categories: string[];
  groups: string[];
  tags: string[];
};

export default function FormData({
  styles,
  categories,
  groups,
  tags,
}: FormDataProps) {
  return (
    <div className="grid p-4 border ">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl">{EDITABLE_COLS.styles.name}:</h3>
          {styles.map((style) => (
            <label
              key={style}
              className="flex items-center gap-1 px-3 py-1 border rounded"
            >
              <input type="checkbox" name="styles" value={style} />
              <span className="capitalize">{style}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-xl">{EDITABLE_COLS.collections.name}:</h3>
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-1 px-3 py-1 border rounded"
            >
              <input type="checkbox" name="categories" value={category} />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-xl">{EDITABLE_COLS.groups.name}:</h3>
          {groups.map((group) => (
            <label
              key={group}
              className="flex items-center gap-1 px-3 py-1 border rounded"
            >
              <input type="checkbox" name="groups" value={group} />
              <span className="capitalize">{group}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="text-xl">{EDITABLE_COLS.tags.name}:</h3>
          {tags.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-1 px-3 py-1 border rounded"
            >
              <input type="checkbox" name="tags" value={tag} />
              <span className="capitalize">{tag}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
