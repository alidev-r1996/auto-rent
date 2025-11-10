// eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "prisma/**", "next-env.d.ts"]),
]);

export default eslintConfig;
