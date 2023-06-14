// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-refresh", "@typescript-eslint"],
  rules: {
    // Only export component from files that have them (HMR support)
    "react-refresh/only-export-components": "warn",
    // Allow implicit return types
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // No unused variables except for the format "_someVariable"
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "single", "all", "multiple"],
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: ["d.ts", ".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
