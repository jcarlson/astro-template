import path from "node:path";
import { defineConfig } from "vitest/config";
import { getViteConfig } from "astro/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

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
          name: "react",
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(__dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      }
    ],
  },
});

export default getViteConfig(vitestConfig);
