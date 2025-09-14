import { defineConfig } from "vitest/config";
import { getViteConfig } from "astro/config";

const vitestConfig = defineConfig({
  test: {
    setupFiles: ["./test/setup.ts"],
    projects: [
      {
        extends: true,
        test: {
          environment: "node",
          include: ["test/**/*.test.ts"],
          name: "astro",
        },
      },
      {
        extends: true,
        test: {
          environment: "jsdom",
          include: ["test/**/*.test.tsx"],
          name: "react"
        },
      },
    ],
  },
});

export default getViteConfig(vitestConfig);
