const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["check-file"],
  rules: {
    "check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
  },
});
