const { defineConfig } = require("eslint-define-config");
const project = ["./tsconfig.json", "packages/**/tsconfig.json", "packages/**/tsconfig.node.json"];

module.exports = defineConfig({
  extends: ["eslint-config-words"],
  parserOptions: { project },
  settings: { "import/resolver": { typescript: { project } } },
});
