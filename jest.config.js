module.exports = {
  testMatch            : ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test|tests).js?(x)' ],
  moduleFileExtensions : ['js'],
  moduleDirectories    : ['node_modules'],
  moduleNameMapper     : {
    'components/styled' : '<rootDir>/src/components/styled/index',
    modules             : '<rootDir>/src/modules',
    utils               : '<rootDir>/src/utils',
  },
};
