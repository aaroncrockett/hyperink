"use client";
import { ViewTransition as ReactViewTransition } from "react";

const slide = {
  enter: "slide-down",
  exit: "slide-up",
  default: "none",
} as const;

const getTransition = (transition: string) => {
  if (transition === "slide") return slide;

  return {};
};

type ViewTransitionProps = {
  transition: string;
  children: React.ReactNode;
};

export function ViewTransition({ transition, children }: ViewTransitionProps) {
  return (
    <ReactViewTransition {...getTransition(transition)}>
      {children}
    </ReactViewTransition>
  );
}
