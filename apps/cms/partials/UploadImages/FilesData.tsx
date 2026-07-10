"use client";

import { EDITABLE_COLS_ARRAY } from "@inktree/db";

type FormDataProps = {
  styles: string[];
  tags: string[];
};

export default function FormData({ styles, tags }: FormDataProps) {
  const data = {
    styles,

    tags,
  };

  return (
    <div className="grid p-4 w-full">
      <div className="grid grid-cols-2 gap-4 w-full">
        {EDITABLE_COLS_ARRAY.filter((col) =>
          ["styles", "tags"].includes(col.key),
        ).map((col) => (
          <div key={col.key}>
            <h3 className="text-xl">{col.name}:</h3>

            {data[col.key as keyof typeof data]?.map((item) => (
              <label
                key={item}
                className="flex items-center gap-1 px-3 py-1 border rounded"
              >
                <input type="checkbox" name={col.key} value={item} />
                <span className="capitalize">{item}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
