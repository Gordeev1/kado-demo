import RNLocalize from 'react-native-localize';
import { localizationDeviceLanguageGetBestAvailable } from './get-best-available';

jest.mock('react-native-localize', () => ({
	getLocales: jest.fn().mockReturnValue([]),
}));

it('Return suitable language supported by app', () => {
	(RNLocalize.getLocales as jest.Mock).mockReturnValue([
		{ countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false },
		{ countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
		{ countryCode: 'AE', languageTag: 'ar-AE', languageCode: 'ar', isRTL: false },
	]);

	const result = localizationDeviceLanguageGetBestAvailable();
	expect(result).toBe('en');
});

it('Return suitable language supported by app with respect to priority', () => {
	(RNLocalize.getLocales as jest.Mock).mockReturnValue([
		{ countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: true },
		{ countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
	]);

	const result = localizationDeviceLanguageGetBestAvailable();
	expect(result).toBe('fr');
});

it('Return null if no suitable languages found', () => {
	(RNLocalize.getLocales as jest.Mock).mockReturnValue([
		{ countryCode: 'RU', languageTag: 'ru-RU', languageCode: 'ru', isRTL: false },
	]);

	const result = localizationDeviceLanguageGetBestAvailable();
	expect(result).toBe(null);
});
