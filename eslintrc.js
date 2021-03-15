module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'plugin: vue/recommended',
    'standard'
  ],
  plugins: ['vue']
}
