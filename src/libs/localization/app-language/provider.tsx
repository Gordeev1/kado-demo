import React, { FunctionComponent, useContext } from 'react';
import { CoreLanguageEnum } from '@kado/core/language/enum';
import { LocalizationDeviceLanguageContext } from '@kado/libs/localization/device-language/context';
import { LocalizationAppLanguageContext } from './context';
import { LocalizationAppLanguageProviderPropsInterface } from './provider-props.interface';

export const LocalizationAppLanguageProvider: FunctionComponent<
	LocalizationAppLanguageProviderPropsInterface
> = ({ userPreference, defaultLanguage = CoreLanguageEnum.English, children }) => {
	const deviceLanguage = useContext(LocalizationDeviceLanguageContext);
	const targetLanguage = userPreference || deviceLanguage || defaultLanguage;

	return (
		<LocalizationAppLanguageContext.Provider value={targetLanguage}>
			{children}
		</LocalizationAppLanguageContext.Provider>
	);
};
