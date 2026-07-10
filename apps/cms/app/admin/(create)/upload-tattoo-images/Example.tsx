"use server";

import { uploadImage } from "./actions";

console.log(uploadImage);

import { PropsWithChildren } from "react";

export default async function Example({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
