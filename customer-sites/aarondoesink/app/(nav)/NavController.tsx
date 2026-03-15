import { ComponentPropsWithoutRef } from "react";
import NavBase from "./NavBase";

const navComponentProps = {
  desktop: "col-start-1 row-start-1 row-span-3 bg-gray-10",
  mobile: "",
};

type NavProps = ComponentPropsWithoutRef<"nav"> & {
  type: "desktop" | "mobile";
};
export default function NavController({ children, type, ...props }: NavProps) {
  return (
    <NavBase className={navComponentProps[type]} {...props}>
      {children}
    </NavBase>
  );
}
