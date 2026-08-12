// next, react
import Link from "next/link";

// @/db

import { type ProfileTaggingOptionsDisplay } from "@/db/api/profileTaggingOpts";

// @/consts
import { ADMIN_TAGGING_OPTS } from "@/consts";
import { Span } from "next/dist/trace";

export function TaggingOptsDisplay({
  opts,
}: {
  opts: ProfileTaggingOptionsDisplay | null;
}) {
  return (
    <>
      {opts &&
        Object.entries(opts).map(([key, value], i) => {
          if (Array.isArray(value)) {
            return (
              <div className="w-full" key={key + i}>
                <div className="flex flex-row items-center gap-2 bg-surface-100-900/80 p-2">
                  <span className="font-bold text-2xl h-full basis-1/3 shrink min-w-0">
                    {key.toUpperCase()}
                  </span>
                  <Link
                    className="text-secondary-500 font-bold underline h-full"
                    href={`${ADMIN_TAGGING_OPTS.href}/${key}`}
                  >
                    EDIT
                  </Link>
                </div>

                <ul className="w-full flex flex-row gap-2 p-2">
                  {value
                    .filter((item): item is string => typeof item === "string")
                    .map((item) => (
                      <li
                        className="p-2 bg-surface-100-900/40 rounded"
                        key={item + i}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            );
          }

          if (typeof value === "string") {
            return (
              <p key={value + key}>
                <span>{value}</span>
              </p>
            );
          }

          return null;
        })}
    </>
  );
}
