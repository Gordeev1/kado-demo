const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
	const {
		resolver: { sourceExts, assetExts },
	} = await getDefaultConfig();
	return {
		transformer: {
			experimentalImportSupport: false,
			inlineRequires: true,
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
		resolver: {
			assetExts: assetExts.filter((ext) => ext !== 'svg'),
			sourceExts: (process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(',') : []).concat([
				...sourceExts,
				'svg',
			]),
			blockList: [/utils\/eslint\/.*/],
		},
	};
})();
