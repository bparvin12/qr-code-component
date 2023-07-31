module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Add any custom ESLint rules you want to enforce here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
