"use client";

import { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import styles from "./Footer.module.css";

type FooterProps = ComponentPropsWithoutRef<"footer"> & {
  children?: ReactNode;
};

export default function Footer({ children, className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(styles.footer, "relative bg-primary-500 w-full", className)}
      {...props}
    >
      {children}
    </footer>
  );
}
