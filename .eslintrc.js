const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './.prettierrc'), 'utf8'),
);

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['prettier', '@react-native-community'],
  rules: {
    'prettier/prettier': ['error', prettierOptions, {}, {
      "usePrettierrc": false
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
          '.native.js',
          '.android.js',
          'ios.js',
        ],
      },
    },
  },
  globals: {
    __DEV__: true,
    Gender: true,
    LineOfBusiness: true,
    UserRewardType: true,
  },
};
