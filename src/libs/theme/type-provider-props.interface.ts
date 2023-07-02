import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';

export interface ThemeTypeProviderPropsInterface {
	userPreference: CoreThemeTypeEnum | null;
	defaultTheme?: CoreThemeTypeEnum;
}
