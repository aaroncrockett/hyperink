import { ComponentPropsWithoutRef } from "react";

type Nav = ComponentPropsWithoutRef<"nav"> & {};
export default function Nav({ children, className, ...props }: Nav) {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  );
}
