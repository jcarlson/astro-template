import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import { getViteConfig } from "astro/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: "chromium" }],
            provider: "playwright",
          },
          name: "storybook",
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});

export default getViteConfig(vitestConfig);
