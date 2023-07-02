import get from 'lodash/get';
import isNil from 'lodash/isNil';
import './polyfills';
import { TranslationsKeyType } from '@kado/core/translations/key.type';
import translationsEn from '@kado/core/translations/en.json';

// TODO: [i18n] replace with lib
export const localicationResources = {
	t: (key: TranslationsKeyType, variables?: Record<string, string | number | undefined>) => {
		const string = get(translationsEn, key);
		return Object.entries(variables || {}).reduce(
			(result, [variable, value]) =>
				result.replaceAll(`{{ ${variable} }}`, `${isNil(value) ? '' : value}`),
			string,
		);
	},
	exist: (key: TranslationsKeyType) => {
		const string = get(translationsEn, key);
		return Boolean(string);
	},
};
