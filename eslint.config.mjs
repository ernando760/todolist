import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import path from 'path';

const currentDir = new URL('.', import.meta.url).pathname;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    ignores: [
      path.resolve(currentDir, 'node_module'),
      path.resolve(currentDir, 'dist'),
    ],
  },
];
