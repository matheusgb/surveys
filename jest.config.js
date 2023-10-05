module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
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
