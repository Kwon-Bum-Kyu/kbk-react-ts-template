import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",

      // Import Sort
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Import Validation
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // Common Rules (Airbnb Style Subset)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  {
    plugins: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    ignores: ["dist/**"],
  },
];
