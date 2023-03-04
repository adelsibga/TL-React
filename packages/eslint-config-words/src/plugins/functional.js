const { defineConfig } = require("eslint-define-config");

/*
 * TODO(code-quality):
 * Need to revisit this configuration if https://github.com/microsoft/TypeScript/issues/42357 is shipped in TypeScript
 */

module.exports = defineConfig({
  extends: ["plugin:functional/all"],
  overrides: [
    {
      extends: ["plugin:functional/off"],
      files: ["*.test.ts", "*.js", ...["figma-sync", "node-lib", "story-test"].map(name => `packages/${name}/src/**`)],
    },
  ],
  plugins: ["functional"],
  rules: {
    "functional/functional-parameters": "off",
    "functional/no-conditional-statements": "off",
    "functional/no-return-void": "off",
    "functional/prefer-immutable-types": "off",
    "functional/type-declaration-immutability": [
      "error",
      // Copied from https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/type-declaration-immutability.md#recommended-and-lite
      {
        rules: [
          {
            comparator: "AtLeast",
            identifiers: "I?Immutable.+",
            immutability: "Immutable",
          },
          {
            comparator: "AtLeast",
            identifiers: "I?ReadonlyDeep.+",
            immutability: "ReadonlyDeep",
          },
          {
            comparator: "AtLeast",
            fixer: [
              {
                pattern: "^(Array|Map|Set)<(.+)>$",
                replace: "Readonly$1<$2>",
              },
              {
                pattern: "^(.+)$",
                replace: "Readonly<$1>",
              },
            ],
            identifiers: "I?Readonly.+",
            immutability: "ReadonlyShallow",
          },
          {
            comparator: "AtMost",
            fixer: [
              {
                pattern: "^Readonly(Array|Map|Set)<(.+)>$",
                replace: "$1<$2>",
              },
              {
                pattern: "^Readonly<(.+)>$",
                replace: "$1",
              },
            ],
            identifiers: "I?Mutable.+",
            immutability: "Mutable",
          },
        ],
      },
    ],
  },
});
