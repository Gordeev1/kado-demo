import React, { useContext, FunctionComponent, PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { coreThemeValues } from '@kado/core/theme/values';
import { useWindowSize } from '@kado/libs/window-size/hook';
import { ThemeInterface } from './interface';
import { ThemeTypeContext } from './type-context';

export const ThemeProvider: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
	const themeType = useContext(ThemeTypeContext);
	const insets = useSafeAreaInsets();
	const windowSize = useWindowSize();

	const theme: ThemeInterface = {
		themeType,
		...coreThemeValues[themeType],
		insets,
		windowSize,
	};

	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
