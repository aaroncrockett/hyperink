import type { Config } from "tailwindcss";

import { BREAKPOINTS } from "./constants/index";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-outfit)"],
        heading: ["var(--font-bebas)"],
      },
    },
    screens: BREAKPOINTS,
  },
};

export default config;
