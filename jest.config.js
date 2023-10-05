module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  coveragePathIgnorePatterns: [
    'index.ts',
    '.*-protocols.ts$'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
