module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "react-refresh",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-html-link-for-pages": "off",
    "react-refresh/only-export-components": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
};
