import type { TagOpts } from "@hyperink/api/options";
//
import { OPTS_METADATA } from "@/app/admin/options/data";
//
import { ADMIN_OPTIONS } from "@/data/links";
//
import { NextLinkWrapper } from "@/ui";

export function TaggingOpts({ opts }: { opts?: TagOpts }) {
  const optsCol = OPTS_METADATA.tag_opts.id;
  return (
    <>
      <p>page</p>

      {opts &&
        Object.entries(opts).map(([key, value], i) => {
          if (Array.isArray(value)) {
            return (
              <div className="w-full" key={key + i}>
                <div className="flex flex-row items-center gap-2 bg-surface-100-900/80 p-2">
                  <span className="min-w-0 h-full font-bold text-2xl basis-1/3 shrink">
                    {key.toUpperCase()}
                  </span>
                  <NextLinkWrapper
                    className="h-full font-bold text-secondary-500 underline"
                    href={`${ADMIN_OPTIONS.href}/${optsCol}/${key}`}
                  >
                    EDIT
                  </NextLinkWrapper>
                </div>

                <ul className="flex flex-row gap-2 p-2 w-full">
                  {value
                    .filter((item): item is string => typeof item === "string")
                    .map((item) => (
                      <li
                        className="bg-surface-100-900/40 p-2 rounded"
                        key={item + i}
                      >
                        {/* {denormalizeFromKabobCase(item)} */}
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            );
          }

          return null;
        })}
    </>
  );
}
