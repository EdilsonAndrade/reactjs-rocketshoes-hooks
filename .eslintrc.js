module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hook'
  ],
  rules: {
    'prettier/prettier':'error', // caso não seja encontrada nenhuma regra o prettier mostrará erro
    'react/jsx-filename-extension':[
      'warn', {extensions: ['.jsx', '.js']}
    ], //faz com que que seja permitido tb criação de codigo jsx  em arquivos .js e não apenas jsx
    'import/prefer-default-export':'off', //desobriga usar o export default nos arquivos que tema apenas ume export
    'jsx-a11y/control-has-associated-label':[0],
    'react/state-in-constructor': [0, 'disabled'],
    'no-console': ["error", {allow: ["tron"]}],
    'no-param-reassign': 'off',
    'react-hooks/rules-of-hooks':'error',
    'react-hooks/exhaustive-deps':'warn'
  },
};
