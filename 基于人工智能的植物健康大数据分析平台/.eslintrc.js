module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-vars': 'warn',
    'space-before-function-paren': 0,
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
