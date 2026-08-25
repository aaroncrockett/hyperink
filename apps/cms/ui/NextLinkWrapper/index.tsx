import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
// @hyperink
import { cn } from "@hyperinkstudio/utils";

type Transition = "nav-forward" | "nav-back" | "slide-up" | "none";

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  textColorCls?: string;
  transition?: Transition;
};

export function NextLinkWrapper({
  children,
  textColorCls = "text-secondary-500 dark:text-secondary-200",
  transition = "nav-forward",
  ...props
}: LinkProps) {
  return (
    <Link
      {...props}
      key={props.href + "nextlinkwrapper"}
      transitionTypes={[transition]}
      className={cn(textColorCls, props.className)}
    >
      {children}
    </Link>
  );
}
