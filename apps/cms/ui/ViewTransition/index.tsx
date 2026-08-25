"use client";
import { ViewTransition as ReactViewTransition } from "react";
// Next
import { usePathname } from "next/navigation";
// @hyperink
import { getPathSegmentCount } from "@hyperinkstudio/utils/";

type Transition = keyof typeof transitions;

const getTransition = (transition: Transition) => {
  if (transition === "nav-forward") return transitions["nav-forward"];
  if (transition === "nav-back") return transitions["nav-back"];
  if (transition === "slide-up") return transitions["slide-up"];
  return {};
};

const horizontal = {
  "nav-forward": {
    enter: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    exit: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    default: "none",
  },

  "nav-back": {
    enter: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    exit: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    default: "none",
  },
};

const vertical = {
  "nav-forward": {
    enter: {
      "nav-forward": "slide-up",
      default: "none",
    },
    exit: {
      "nav-forward": "slide-down",
      default: "none",
    },
    default: "none",
  },

  "nav-back": {
    enter: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    exit: {
      "nav-forward": "nav-forward",
      "nav-back": "nav-back",
      default: "none",
    },
    default: "none",
  },
  "exit-up": {
    exit: "slide-up",
    default: "none",
  },
  "exit-down": {
    exit: "slide-down",
    default: "none",
  },
};

const transitions = {
  "nav-forward": horizontal["nav-forward"],
  "nav-back": horizontal["nav-back"],
  "slide-up": vertical["nav-forward"],
} as const;

type ViewTransitionProps = {
  transition: keyof typeof transitions;
  position?: string;
  children: React.ReactNode;
};

export function ViewTransition({
  transition,

  children,
}: ViewTransitionProps) {
  return (
    <ReactViewTransition {...getTransition(transition)}>
      {children}
    </ReactViewTransition>
  );
}
