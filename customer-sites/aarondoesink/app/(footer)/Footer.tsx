import { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import styles from "./Footer.module.css";

type FooterProps = ComponentPropsWithoutRef<"footer"> & {
  children?: ReactNode;
  lead?: ReactNode;
  tail?: ReactNode;
};

export default function Footer({
  children,
  className,
  lead,
  tail,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(
        styles.footer,
        "sticky lg:relative bottom-0 h-auto  flex items-center justify-between  mx-auto w-full p-5 px-4 ",
        className,
      )}
      {...props}
    >
      {lead}
      {children}

      {tail}
    </footer>
  );
}
