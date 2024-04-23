module.exports = {
  '**/*.+(ts|tsx|js|jsx)': ['lint', 'format'],
  '**/*.+(ts|tsx)': ["bash -c 'yarn typecheck'"],
};
