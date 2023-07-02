import React, { FunctionComponent, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';
import { themeMapperColorSchemeToThemeType } from './mapper/color-scheme-to-theme-type';
import { ThemeTypeContext } from './type-context';
import { ThemeTypeProviderPropsInterface } from './type-provider-props.interface';

export const ThemeTypeProvider: FunctionComponent<
	PropsWithChildren<ThemeTypeProviderPropsInterface>
> = ({ userPreference, defaultTheme = CoreThemeTypeEnum.Light, children }) => {
	const deviceColorScheme = useColorScheme();
	const deviceBasedTheme = themeMapperColorSchemeToThemeType(deviceColorScheme);
	const themeType = userPreference || deviceBasedTheme || defaultTheme;

	return <ThemeTypeContext.Provider value={themeType}>{children}</ThemeTypeContext.Provider>;
};
