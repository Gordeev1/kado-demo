import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components/native';
import 'react-native-gesture-handler/jestSetup';

import { setUpTests } from 'react-native-reanimated/lib/reanimated2/jestUtils.js';
setUpTests();

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => ({
	useFocusEffect: jest.fn(),
	useNavigation: () => ({
		setOptions: jest.fn(),
		navigate: jest.fn(),
	}),
}));

jest.mock('@react-navigation/elements', () => ({
	useHeaderHeight: () => 88,
}));
