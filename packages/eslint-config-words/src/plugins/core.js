const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["eslint:all"],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "capitalized-comments": [
      "error",
      "always",
      {
        ignorePattern: "jscpd|cspell",
      },
    ],
    "id-length": ["error", { exceptions: ["_"] }],
    "no-ternary": "off",
    "no-undefined": "off",
    "no-warning-comments": "off",
    "one-var": "off",
    "sort-imports": "off",
    "spaced-comment": "off",
  },
});
