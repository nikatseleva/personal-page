export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        '^.+\.(t|j)sx?$': ['@swc/jest', {
            jsc: {
                parser: {syntax: 'typescript', tsx: true},
                transform: {react: {runtime: 'automatic'}},
            },
        }],
    },
    moduleNameMapper: {
        '\.(png|jpe?g|gif|webp|svg|pdf)$': '<rootDir>/test/fileMock.cjs',
    },
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',
        '!src/setupTests.ts',
        '!src/index.tsx',
    ],
};
