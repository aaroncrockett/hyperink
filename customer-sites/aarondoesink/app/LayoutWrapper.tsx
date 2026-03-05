"use client";
import dynamic from "next/dynamic";
// Wrapper dynamically imports Layouts with SSR disabled.
// Ensures Layouts is rendered only on the client.
// TODO: Verify component, dynamic import and ssr: false are necessary.

const Layouts = dynamic(() => import("./Layouts"), { ssr: false });

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layouts>{children}</Layouts>;
}
