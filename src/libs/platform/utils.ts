import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export const libsPlatformUtils = {
	isAndroid,
	isIOS,
	version: String(Platform.Version),
};
