// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'coverage/*', '.expo/*'],
  },
  {
    // Règles supplémentaires pour TypeScript + React Native
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',  // Éviter any
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',  // Ignorer les args préfixés par _
        varsIgnorePattern: '^_',
      }],
      
      
      // React
      'react/self-closing-comp': 'error',  // <Component /> au lieu de <Component></Component>

      // Qualité générale
      'no-console': ['warn', { allow: ['warn', 'error'] }],  // console.log interdit en prod
      'no-debugger': 'error',
    },
  },
]);