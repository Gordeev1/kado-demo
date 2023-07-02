module.exports = {
	rootDir: './',
	testMatch: ['<rootDir>/e2e/**/*.spec.ts'],
	maxWorkers: 1,
	verbose: true,
	testTimeout: 300000,
	reporters: ['detox/runners/jest/reporter'],
	globalSetup: 'detox/runners/jest/globalSetup',
	globalTeardown: 'detox/runners/jest/globalTeardown',
	testEnvironment: 'detox/runners/jest/testEnvironment',
};
