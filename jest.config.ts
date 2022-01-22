module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts', 'jest-extended'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
};
