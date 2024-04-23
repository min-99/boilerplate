module.exports = {
  '**/*.+(ts|tsx|js|jsx)': ['eslint --cache', 'prettier --write'],
  '**/*.+(ts|tsx)': ["bash -c 'yarn core typecheck'"],
};
