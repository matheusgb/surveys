module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  coveragePathIgnorePatterns: [
    'index.ts',
    '.*-protocols.ts$',
    '<rootDir>/src/main/**'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
