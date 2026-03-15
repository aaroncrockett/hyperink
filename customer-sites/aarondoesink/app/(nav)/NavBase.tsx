import { ComponentPropsWithoutRef } from "react";

type NavProps = ComponentPropsWithoutRef<"nav"> & {};
export default function DTNav({ children, className, ...props }: NavProps) {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  );
}
