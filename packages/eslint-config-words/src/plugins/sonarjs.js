// cspell:word sonarjs
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["plugin:sonarjs/recommended"],
});
