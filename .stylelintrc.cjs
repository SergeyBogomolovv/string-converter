module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  plugins: ["stylelint-order"],
  rules: {
    indentation: 2,
    "string-quotes": "single",
    "color-hex-length": "short",
    "order/properties-alphabetical-order": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
  },
};
