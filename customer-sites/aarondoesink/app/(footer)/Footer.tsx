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
      {/* <div className="absolute -top-1 lg:-top-2 left-0 w-full pointer-events-none">
        <Image
          src="/images/footer-top.png"
          alt="Footer top decoration"
          width={4214}
          height={40}
          className="w-auto h-auto mx-auto block filter brightness-90 saturate-110 hue-rotate-[3deg]"
        />
      </div> */}

      {children}
    </footer>
  );
}
