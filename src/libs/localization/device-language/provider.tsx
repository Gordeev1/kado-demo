import React, {
	FunctionComponent,
	useCallback,
	useState,
	useEffect,
	PropsWithChildren,
} from 'react';
import RNLocalize from 'react-native-localize';
import { localizationDeviceLanguageGetBestAvailable } from './get-best-available';
import { LocalizationDeviceLanguageContext } from './context';

export const LocalizationDeviceLanguageProvider: FunctionComponent<PropsWithChildren> = ({
	children,
}) => {
	const [language, setLanguage] = useState(localizationDeviceLanguageGetBestAvailable());

	const handleLocalizationChange = useCallback(() => {
		const nextLanguage = localizationDeviceLanguageGetBestAvailable();
		if (nextLanguage) {
			setLanguage(nextLanguage);
		}
	}, [setLanguage]);

	useEffect(() => {
		RNLocalize.addEventListener('change', handleLocalizationChange);
		return () => RNLocalize.removeEventListener('change', handleLocalizationChange);
	}, [handleLocalizationChange]);

	return (
		<LocalizationDeviceLanguageContext.Provider value={language}>
			{children}
		</LocalizationDeviceLanguageContext.Provider>
	);
};
