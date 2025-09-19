/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    // Allow Tailwind directives and unknown at-rules commonly used in PostCSS/Tailwind
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
      },
    ],
    'no-empty-source': null,
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
}

