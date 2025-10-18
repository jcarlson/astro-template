// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import storybook from "eslint-plugin-storybook";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsx from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: [".astro/**/*", "dist/**/*", "node_modules/**/*"],
  },

  js.configs.recommended,
  astro.configs.recommended,
  storybook.configs["flat/recommended"],

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsx,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsx.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["playwright.config.ts"],
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },

  {
    files: ["e2e/**/*.ts"],
    languageOptions: {
      globals: {
        localStorage: "readonly",
        window: "readonly",
      },
    },
  },

  prettier,
]);
