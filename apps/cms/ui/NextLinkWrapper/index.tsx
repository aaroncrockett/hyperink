// This component exists in order to add transitions, which will be enabled before long
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
//
import { cn } from "@hyperink/utils";

// type Transition = "nav-forward" | "nav-back" | "slide-up" | "none";

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  // transition?: Transition;
  utilClassName?: string;
};

export function NextLinkWrapper({
  children,
  // transition = "nav-forward",
  utilClassName = "dark:text-secondary-200 text-secondary-600",
  ...props
}: LinkProps) {
  return (
    <Link
      {...props}
      key={props.href + "-next-link-wrapper"}
      className={cn(props.className, utilClassName)}
      // transitionTypes={[transition]}
    >
      {children}
    </Link>
  );
}
