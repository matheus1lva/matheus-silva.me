import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default [
  { ignores: ['.next/**', 'node_modules/**', 'public/**'] },
  js.configs.recommended,
  ...compat.extends('next', 'next/core-web-vitals'),
  prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.amd } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'no-unused-vars': 0,
      'react/no-unescaped-entities': 0,
    },
  },
]
