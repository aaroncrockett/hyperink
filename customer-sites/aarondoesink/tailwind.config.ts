import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-outfit)"],
        heading: ["var(--font-bebas)"],
      },
    },
  },
};

export default config;
