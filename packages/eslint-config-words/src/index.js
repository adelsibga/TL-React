/* eslint-disable sonarjs/no-duplicate-string */
const { defineConfig } = require("eslint-define-config");
const configDirectory = `${__dirname}/plugins/`;

module.exports = defineConfig({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    ...require("node:fs")
      .readdirSync(configDirectory)
      .map(file => `${configDirectory}${file}`),
    "prettier",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    /*
     * TODO(code-quality):
     * Fine tune this rule https://eslint.org/docs/latest/rules/padding-line-between-statements
     */
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      // For "return" statement:
      { blankLine: "always", next: "return", prev: "*" },
      { blankLine: "never", next: "return", prev: ["if"] },
      // For variable declarations
      {
        blankLine: "never",
        next: ["singleline-const", "singleline-let"],
        prev: ["singleline-const", "singleline-let"],
      },
      {
        blankLine: "always",
        next: ["multiline-const", "multiline-let"],
        prev: ["multiline-const", "multiline-let"],
      },
      {
        blankLine: "always",
        next: ["singleline-const", "singleline-let"],
        prev: ["multiline-const", "multiline-let"],
      },
      {
        blankLine: "always",
        next: ["multiline-const", "multiline-let"],
        prev: ["singleline-const", "singleline-let"],
      },
      // For imports/exports:
      {
        blankLine: "never",
        next: ["import"],
        prev: ["import"],
      },
      {
        blankLine: "always",
        next: ["export"],
        prev: ["export"],
      },
      {
        blankLine: "always",
        next: ["export"],
        prev: ["import"],
      },
    ],
    "padding-line-between-statements": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
});
