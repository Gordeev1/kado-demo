module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@kado': './src',
					'@assets': './assets',
					'@tests': './tests',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
