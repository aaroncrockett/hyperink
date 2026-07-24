import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { MENU_LINKS } from "../../constants/";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};
export default function Nav({
  className,
  ulCls,
  liCls,
  linkCls,
  ...props
}: NavProps) {
  return (
    <nav
      className={cn("col-start-1 row-start-1 row-span-3", className)}
      {...props}
    >
      <ul className={cn("flex flex-col gap-2", ulCls)}>
        {MENU_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href} className={cn(liCls)}>
              <Link
                href={link.href}
                className={cn(linkCls, "flex flex-row gap-2 font-bold")}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {link.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
