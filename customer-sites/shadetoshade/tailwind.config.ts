import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/react/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/react/components/FormClient/index.tsx"
  ],
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
