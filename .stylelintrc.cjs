module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-order",
  ],
  plugins: ["stylelint-order"],
  ignoreFiles: ["node_modules/**", "dist/**"],
  rules: {
    "color-hex-length": "short",
    "order/properties-alphabetical-order": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
  },
};
