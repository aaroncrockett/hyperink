"use server";
import { cn } from "@inktree/utils";

import { ReactNode, ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  action: (formData: FormData) => Promise<void>;
  children: ReactNode;
  padding?: string;
  space?: string;
};

export default async function Form({
  action,
  children,
  className,
  padding = "p-4",
  space = "space-y-4",
  ...props
}: FormProps) {
  return (
    <form action={action} className={cn(padding, space, className)} {...props}>
      {children}
      <button type="submit" className="btn preset-filled-primary-500">
        Submit
      </button>
    </form>
  );
}
