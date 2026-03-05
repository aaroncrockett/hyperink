import type { Config } from "tailwindcss";

import { BREAKPOINTS } from "./constants/index";

const config: Config = {
  theme: {
    screens: BREAKPOINTS,
  },
};

export default config;
