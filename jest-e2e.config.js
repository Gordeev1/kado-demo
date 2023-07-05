module.exports = {
	testRunner: 'jest-circus/runner',
	testEnvironment: './e2e/environment.js',
	testTimeout: 300000,
	reporters: ['detox/runners/jest/streamlineReporter'],
	verbose: true,
};
