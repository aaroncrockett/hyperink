"use client";
import { useState } from "react";
import { EDITABLE_COLS } from "@inktree/db";

type ImageInputsProps = {
  styles: string[];
  categories: string[];
  groups: string[];
  tags: string[];
};

export default function ImageInputs({
  styles,
  categories,
  groups,
  tags,
}: ImageInputsProps) {
  const [isSetOfImgs, setIsSetOfImgs] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [coverIndex, setCoverIndex] = useState(0);

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

      <div className="mt-4 space-y-2">
        <div className="p-2 bg-surface-100">
          <h3 className="text-xl">{isSetOfImgs ? "Files" : "File"}</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isSetOfImgs}
              className="checkbox"
              onChange={(e) => {
                setIsSetOfImgs(e.target.checked);
              }}
            />
            Series
          </label>
          <input
            type="file"
            name="files"
            accept="image/*"
            onChange={(e) => {
              const selected = Array.from(e.target.files ?? []);
              setFiles(selected);
              setCoverIndex(0);
            }}
            className="input preset-filled-surface-200"
            multiple={isSetOfImgs}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-2">
        {files.map((file, index) => (
          <div key={index} className="flex flex-col gap-1">
            <input
              type="text"
              name="readableName"
              placeholder="Enter a title"
            />
            <button
              type="button"
              onClick={() => setCoverIndex(index)}
              className={`border p-2 ${
                coverIndex === index ? "border-green-500" : ""
              }`}
            >
              <img
                src={URL.createObjectURL(file)}
                className="object-cover w-full h-24"
              />
              {coverIndex === index && <div>Cover</div>}
            </button>
          </div>
        ))}
      </div>

      <input type="hidden" name="coverIndex" value={String(coverIndex)} />
    </div>
  );
}
