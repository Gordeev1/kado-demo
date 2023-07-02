module.exports = {
	preset: 'react-native',
	testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(ts|tsx|js|jsx)?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	modulePathIgnorePatterns: ['<rootDir>/e2e'],
	moduleNameMapper: {
		...require('jest-module-name-mapper').default(),
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/tests/mocks/file-mock.js',
		'.+\\.(svg)$': '<rootDir>/tests/mocks/svg-mock.js',
	},
	coverageDirectory: '<rootDir>/tests/coverage',
	verbose: true,
	clearMocks: true,
	coverageProvider: 'v8',
	collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
	coveragePathIgnorePatterns: [
		'<rootDir>/tests',
		'.props.ts',
		'.enum.ts',
		'.interface.ts',
		'.type.ts',
	],
	setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
