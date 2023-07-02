import { useEffect } from 'react';
import { NavigationBar, StatusBar } from 'react-native-bars';
import { useTheme } from 'styled-components/native';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';

export const AppBarsComponent = () => {
	const { themeType } = useTheme();

	useEffect(() => {
		const barStyle = themeType === CoreThemeTypeEnum.Light ? 'dark-content' : 'light-content';
		StatusBar.pushStackEntry({ barStyle, animated: true });
		NavigationBar.pushStackEntry({ barStyle });
	}, [themeType]);

	return null;
};
