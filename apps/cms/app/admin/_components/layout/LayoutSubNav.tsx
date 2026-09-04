"use client";
// Next
import { usePathname } from "next/navigation";
// hyperink
import { getPathSegments } from "@hyperinkstudio/utils";
//
import { Heading } from "@/ui";
import { cn } from "@hyperinkstudio/utils";
//@
import { FLASH_LINKS_LIST } from "@/consts";
import { PageAdminNav } from "@/app/admin/_components/PageAdminNav";

const sectionMap = {
  flash: {
    heading: "Flash",
    links: FLASH_LINKS_LIST,
  },
};

const getSection = (segmentKey: string) => {
  if (segmentKey === "flash") return sectionMap["flash"];
};

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
  const pathname = usePathname();
  const segments = getPathSegments(pathname);
  const section = getSection(segments[1]);

  if (!section) return null;
  return (
    <div className={cn(cls, layoutCls, paddingCls, widthCls, marginCls)}>
      <Heading as="h1" text={section.heading}></Heading>
      <PageAdminNav links={section.links} />
    </div>
  );
}
