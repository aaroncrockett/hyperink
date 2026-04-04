import { uploadImage } from "./actions";
import { createClient } from "@/utils/supabase/server";
import type { Client } from "@inktree/db";
import {
  tattooCollections,
  tattooGroups,
  tattooStyles,
  tattooTags,
} from "@inktree/db";

export default async function AdminPage() {
  const client: Client = await createClient();

  const {
    data: { user },
  } = await client.getUser();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 bg-slate-100">
      <h1 className="text-3xl">ADMIN</h1>
      <p>Hello {user?.user_metadata.full_name}</p>

      <form
        action={uploadImage}
        className="bg-slate-50 p-6 border flex flex-col space-y-4"
      >
        <div className=" flex-col space-y-1">
          <h3 className="text-xl">Styles:</h3>
          {tattooStyles.map((style) => (
            <label
              key={style}
              className="flex items-center gap-1 px-3 py-1 border rounded cursor-pointer hover:bg-slate-200"
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
          {tattooCollections.map((collection) => (
            <label
              key={collection}
              className="flex items-center gap-1 px-3 py-1 border rounded cursor-pointer hover:bg-slate-200"
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
          {tattooGroups.map((group) => (
            <label
              key={group}
              className="flex items-center gap-1 px-3 py-1 border rounded cursor-pointer hover:bg-slate-200"
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
          {tattooTags.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-1 px-3 py-1 border rounded cursor-pointer hover:bg-slate-200"
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
    </div>
  );
}
