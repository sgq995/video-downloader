module.exports = {
  plugins: ["@typescript-eslint", "svelte", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: ["build/**", ".plasmo/**"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
  overrides: [
    {
      files: ["*.cjs"],
      env: { node: true },
    },
    {
      files: ["*.mjs"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
      },
      env: { node: true },
    },
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"],
      },
    },
  ],
};
