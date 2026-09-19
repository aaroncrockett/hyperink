"use client";
//
import { usePathname } from "next/navigation";
//
import { getPathSegments } from "@hyperink/utils";
import { cn } from "@hyperink/utils";
//
// import { FLASH_LINKS_LIST } from "@/consts";
// import { PageAdminNav } from "@/app/admin/_components/PageAdminNav";

// const sectionMap = {
//   flash: {
//     heading: "Flash",
//     links: FLASH_LINKS_LIST,
//   },
// };

// const getSection = (segmentKey: string) => {
//   if (segmentKey === "flash") return sectionMap["flash"];
// };

export function LayoutSubNav({
  cls,
  layoutCls,
  paddingCls,
  widthCls,
  marginCls,
}: {
  cls?: string;
  layoutCls?: string;
  paddingCls?: string;
  marginCls?: string;
  widthCls?: string;
}) {
  // const pathname = usePathname();
  // const segments = getPathSegments(pathname);
  // const section = getSection(segments[1]);

  // if (!section) return null;
  return null;
  return (
    <div className={cn(cls, layoutCls, paddingCls, widthCls, marginCls)}>
      {/* <h1>{section.heading}</h1> */}
      {/* <PageAdminNav links={section.links} /> */}
    </div>
  );
}
