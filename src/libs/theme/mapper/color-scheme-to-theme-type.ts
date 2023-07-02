import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';
import { ColorSchemeName } from 'react-native';

export const themeMapperColorSchemeToThemeType = (
	scheme: ColorSchemeName,
): CoreThemeTypeEnum | undefined => {
	switch (scheme) {
		case 'light':
			return CoreThemeTypeEnum.Light;
		case 'dark':
			return CoreThemeTypeEnum.Dark;
	}
};
