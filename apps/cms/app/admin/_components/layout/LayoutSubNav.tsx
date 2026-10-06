"use client";
// Next
import { usePathname } from "next/navigation";
//
import { getPathSegments } from "@hyperink/utils";
//
import { FLASH_LINKS_LIST, FLASH_LINKS_KEYS } from "@/data/links";
//
import { PageAdminNav } from "./PageAdminNav";

const sectionMap = {
  flash: {
    heading: "Flash",
    links: FLASH_LINKS_LIST,
    keys: FLASH_LINKS_KEYS,
  },
};

const getSection = (segmentKey: string) => {
  if (segmentKey === "flash") return sectionMap["flash"];
};

export function LayoutSubNav({ ...props }: React.ComponentProps<"div">) {
  const pathname = usePathname();
  const segments = getPathSegments(pathname);
  const section = getSection(segments[1]);

  if (!section) return null;
  return (
    <div {...props}>
      <h1 className="hI-h1">{section.heading}</h1>
      <PageAdminNav links={section.links} keys={section.keys} />
    </div>
  );
}
