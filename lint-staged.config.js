module.exports = {
  '**/*.+(ts|tsx|js|jsx)': ['eslint --cache', 'prettier --cache'],
  '**/*.+(ts|tsx)': ['typecheck'],
};
