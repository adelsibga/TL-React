const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:eslint-comments/recommended"],
  rules: {
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "eslint-comments/no-unused-disable": ["error"],
    "eslint-comments/no-unused-enable": ["error"],
  },
});
