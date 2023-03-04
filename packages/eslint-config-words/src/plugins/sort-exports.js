const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  plugins: ["sort-exports"],
  rules: {
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
  },
});
