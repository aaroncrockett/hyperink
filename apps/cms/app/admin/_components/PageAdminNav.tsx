"use client";
// 3rd party
import { motion } from "motion/react";
// Next
import { usePathname } from "next/navigation";
// hyperink
import { cn } from "@hyperinkstudio/utils/";
// @
import { NextLinkWrapper, Icon } from "@/ui";
//
import { getPathSegments } from "@hyperinkstudio/utils/";
type Link = {
  href: string;
  name: string;
  id: string;
  [key: string]: unknown;
  icon: string;
  order: number;
};

type PageAdminNavsProps = {
  links: Link[];
  layout?: "col" | "row";
  cls?: string;
  gap?: string;
  textSize?: string;
  linkCls?: string;
  linkColorCls?: string;
  linkPaddingCls?: string;
  linkHoverCls?: string;
  linkClsCurrent?: string;
  linkClsWeight?: string;
};

export function PageAdminNav({ links }: PageAdminNavsProps) {
  const pathname = usePathname();

  const getTransitionKey = (href: string) => {
    const destinationSegments = getPathSegments(href);
    const destinationKey = destinationSegments[destinationSegments.length - 1];
    const currentSegments = getPathSegments(pathname);
    const currentKey = currentSegments[currentSegments.length - 1];

    if (destinationSegments[0] !== "admin") {
      console.error(
        "There is a problem with the page admin nav. We may not be in the admin!!",
      );
      return "none";
    }

    if (destinationKey === currentKey) return "slide-up";
    //
    const destinationOrder = links.find(
      (link) => link.id === destinationKey,
    )?.order;

    const currentOrder = links.find((link) => link.id === currentKey)?.order;

    if (destinationOrder === undefined || currentOrder === undefined) {
      // no need for page navigation.
      return "none";
    }

    if (destinationOrder > currentOrder) return "nav-forward";
    if (destinationOrder < currentOrder) return "nav-back";
  };

  return (
    <ul className="flex flex-row justify-around gap-3 border-b-3 bg-surface-200-800/20 border-surface-300-700/20 my-2 rounded-t">
      {links.map((link) => {
        const transitionKey = getTransitionKey(link.href);

        const isCurrent = pathname === link.href;

        return (
          <li key={link.href + "-page-admin-nav"}>
            <NextLinkWrapper
              transition={transitionKey}
              className={cn(
                "py-1 px-3",
                pathname === link.href && "text-surface-900-100 font-bold",
              )}
              // Remove if after regularly usage determine this isnt needed for future functionality
              // href={link.href + "?transition=" + transitionKey}
              href={link.href}
            >
              <motion.span
                whileHover={{
                  y: -2,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 1.025,
                }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 35,
                }}
                className="relative inline-flex flex-col items-center justify-center gap-1 p-3 pb-4 mb-1 text-sm rounded-t"
              >
                {link.name}
                <Icon size="md" name={link.icon} />
                {isCurrent && (
                  <motion.span
                    layoutId="page-admin-nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-current"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 35,
                    }}
                  />
                )}
              </motion.span>
            </NextLinkWrapper>
          </li>
        );
      })}
    </ul>
  );
}
