import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { MOBILE_FOOTER_LINKS } from "../../constants/internal-links";

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  ulCls?: string;
  liCls?: string;
  linkCls?: string;
};

export default function NavController({
  className,
  ulCls,
  liCls,
  linkCls,
  ...props
}: NavProps) {
  return (
    <nav className={cn(className)} {...props}>
      <ul className={cn("flex flex-row justify-around gap-4 w-full", ulCls)}>
        {MOBILE_FOOTER_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.href} className={cn(liCls)}>
              <Link
                href={link.href}
                className={cn(
                  linkCls,
                  "flex-col gap-0.5 items-center font-bold text-sm text-white",
                )}
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
