import { CoreLanguageEnum } from '@kado/core/language/enum';
import { PropsWithChildren } from 'react';

export interface LocalizationAppLanguageProviderPropsInterface extends PropsWithChildren {
	userPreference: CoreLanguageEnum | null;
	defaultLanguage?: CoreLanguageEnum;
}
