module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "@typescript-eslint",
        "prettier",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "react/react-in-jsx-scope": "off", // Vite + React 17+
        "prettier/prettier": ["error"],
        "@typescript-eslint/no-explicit-any": "warn",
    },
};
