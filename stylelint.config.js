module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-group-selectors', 'stylelint-order', 'stylelint-a11y'],
  rules: {
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'block-no-empty': true,
    'prettier/prettier': true,
    'plugin/stylelint-group-selectors': true,
    'order/properties-order': ['width', 'height'],
    'order/order': ['custom-properties', 'declarations'],
    'shorthand-property-no-redundant-values': true,
  },
};
