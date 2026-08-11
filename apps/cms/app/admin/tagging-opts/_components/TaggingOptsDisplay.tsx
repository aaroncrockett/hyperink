// next, react
import Link from "next/link";

// @/db

import { type ProfileTaggingOptionsDisplay } from "@/db/api/profileTaggingOpts";

// @/consts
import { ADMIN_TAGGING_OPTS } from "@/consts";

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
              <div key={key + i}>
                <p className="font-bold">{key}</p>
                {key}
                <Link
                  className="text-secondary-500 font-bold underline"
                  href={`${ADMIN_TAGGING_OPTS.href}/${key}`}
                >
                  EDIT
                </Link>

                <ul>
                  {value
                    .filter((item): item is string => typeof item === "string")
                    .map((item) => (
                      <li key={item + i}>
                        {item}
                        <span className="truncate"></span>
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
