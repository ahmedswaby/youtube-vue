module.exports = {
	verbose: true,
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
	},
	collectCoverageFrom: ['src/*.{js,vue}', '!**/node_modules/**'],
	coverageReporters: ['html', 'text-summary'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	}
};
