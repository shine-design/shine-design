const eslintrc = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['markdown', 'react', 'babel'],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/no-typos': 0,
    'react/no-multi-comp': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0,
    'react/jsx-boolean-value': 0,
    'react/no-string-refs': 0,
    'react/destructuring-assignment': 0,
    'import/no-webpack-loader-syntax': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-wrap-multilines': ['error', {declaration: false, assignment: false}],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.md']}],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'prefer-template': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-nested-ternary': 0,
    'no-return-assign': 0
  },
};

if (process.env.RUN_ENV === 'DEMO') {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
  };

  Object.assign(eslintrc.rules, {
    indent: 0,
    'no-console': 0,
    'no-plusplus': 0,
    'eol-last': 0,
    'no-script-url': 0,
    'prefer-rest-params': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/href-no-hash': 0,
    'prefer-destructuring': 0, // TODO: remove later
    'max-len': 0, // TODO: remove later
    'consistent-return': 0, // TODO: remove later
    'no-return-assign': 0, // TODO: remove later
    'no-param-reassign': 0, // TODO: remove later
    'import/no-extraneous-dependencies': 0,
  });
}

module.exports = eslintrc;
