import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type LinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "textColorCls"> & {
  textColorCls?: string;
};

export function NextLinkWrapper({
  children,
  textColorCls = "text-tertiary-500 dark:text-tertiary-200",
  ...props
}: LinkProps) {
  return (
    <Link className={textColorCls} {...props}>
      {children}
    </Link>
  );
}
