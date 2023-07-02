import RNLocalize from 'react-native-localize';
import { CoreLanguageEnum } from '@kado/core/language/enum';

export function localizationDeviceLanguageGetBestAvailable(): CoreLanguageEnum | null {
	const preferedLanguages = RNLocalize.getLocales().map((locale) =>
		locale.languageCode.toLowerCase(),
	);

	const supportedLanguages = Object.values(CoreLanguageEnum) as string[];

	const found = preferedLanguages.find((lang) => supportedLanguages.includes(lang));

	return (found as CoreLanguageEnum) || null;
}
