module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: false,
  },
  globals: {
    // Jest
    it: "readonly",
    expect: "readonly",
    describe: "readonly",
    jest: "readonly",

    // Node
    require: "readonly",
    process: "readonly",
    module: "readonly",

    // React Native
    __DEV__: "readonly",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    // ESLint Rules
    // https://eslint.org/docs/rules/
    // Possible Errors
    "no-await-in-loop": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-extra-semi": "error",
    "no-irregular-whitespace": "error",
    "no-sparse-arrays": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Best Practices
    "array-callback-return": "warn",
    curly: "warn",
    "default-case": "warn",
    "dot-notation": "warn",
    eqeqeq: "warn",
    "max-classes-per-file": ["error", 2],
    "no-alert": "error",
    "no-console": "error",
    "no-caller": "error",
    "no-useless-constructor": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "warn",
    "no-multi-spaces": "error",
    "no-proto": "error",
    "no-redeclare": "warn",
    "no-return-assign": "warn",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "warn",
    "no-useless-return": "warn",
    "require-await": "off",
    radix: "warn",

    // Variables
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "error",

    // Common JS
    "callback-return": "warn",
    "handle-callback-err": "warn",

    // Stylistic
    camelcase: [
      "error",
      {
        properties: "always",
      },
    ],
    "linebreak-style": ["error", "unix"],
    "max-depth": ["error", 3],
    "max-params": ["error", 3],
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": "error",
    "no-plusplus": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",

    // ES6
    "no-confusing-arrow": "warn",
    "no-const-assign": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",

    // React
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // Typescript
    "@typescript-eslint/no-empty-object-type": "off",
  },
};
