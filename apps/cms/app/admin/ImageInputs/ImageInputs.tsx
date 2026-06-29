import {
  getUserTattooOptionsByGroups,
  getUserTattooOptionsByCategories,
  getUserTattooOptionsByStyles,
  getUserTattooOptionsByTags,
} from "./index";
import { createServerClientAndAuth } from "@/utils/db/server";

const client = await createServerClientAndAuth();

export default async function UploadImage() {
  const groups = await getUserTattooOptionsByGroups(client);
  const categories = await getUserTattooOptionsByCategories(client);
  const styles = await getUserTattooOptionsByStyles(client);
  const tags = await getUserTattooOptionsByTags(client);

  return (
    <div>
      <div className="flex-col space-y-1">
        <h3 className="text-xl">Styles: groups</h3>
        {styles.map((style) => (
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
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-slate-200"
          >
            <input
              type="checkbox"
              name="categories"
              value={category}
              className="accent-indigo-600"
            />
            <span className="capitalize">{category}</span>
          </label>
        ))}
      </div>
      <div className="flex-col space-y-1">
        <h3 className="text-xl">Groups:</h3>
        {groups.map((group) => (
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
        {tags.map((tag) => (
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
        {/* {groups && groups.length > 0 && (
          <h3 className="text-xl">Styles: {groups[0]}</h3>
        )} */}
      </div>
      <input className="input" type="file" name="file" required />
    </div>
  );
}
