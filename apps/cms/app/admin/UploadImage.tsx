import { uploadImage } from "./actions";
import {
  TATTOO_COLLECTIONS,
  TATTOO_GROUPS,
  TATTOO_STYLES,
  TATTOO_TAGS,
} from "@/utils/db/server";

export default async function UploadImage() {
  return (
    <form
      action={uploadImage}
      className="bg-slate-50 p-6 border flex flex-col space-y-4"
    >
      <div className="flex-col space-y-1">
        <h3 className="text-xl">Styles:</h3>
        {TATTOO_STYLES.map((style) => (
          <label
            key={style}
            className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-slate-200"
          >
            <input
              type="checkbox"
              name="styles"
              value={style}
              className="accent-indigo-600"
            />
            <span className="capitalize">{style}</span>
          </label>
        ))}
      </div>

      <div className="flex-col space-y-1">
        <h3 className="text-xl">Collections:</h3>
        {TATTOO_COLLECTIONS.map((collection) => (
          <label
            key={collection}
            className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-slate-200"
          >
            <input
              type="checkbox"
              name="collections"
              value={collection}
              className="accent-indigo-600"
            />
            <span className="capitalize">{collection}</span>
          </label>
        ))}
      </div>

      <div className="flex-col space-y-1">
        <h3 className="text-xl">Groups:</h3>
        {TATTOO_GROUPS.map((group) => (
          <label
            key={group}
            className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-slate-200"
          >
            <input
              type="checkbox"
              name="groups"
              value={group}
              className="accent-indigo-600"
            />
            <span className="capitalize">{group}</span>
          </label>
        ))}
      </div>

      <div className="flex-col space-y-1">
        <h3 className="text-xl">Tags:</h3>
        {TATTOO_TAGS.map((tag) => (
          <label
            key={tag}
            className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-slate-200"
          >
            <input
              type="checkbox"
              name="tags"
              value={tag}
              className="accent-indigo-600"
            />
            <span className="capitalize">{tag}</span>
          </label>
        ))}
      </div>

      <input className="input" type="file" name="file" required />

      <button className="btn preset-filled-secondary-500" type="submit">
        Upload
      </button>
    </form>
  );
}
