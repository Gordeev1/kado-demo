import React, { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { LocalizationAppLanguageContext } from './context';
import { LocalizationAppLanguageProvider } from './provider';
import { LocalizationDeviceLanguageContext } from '../device-language/context';
import { CoreLanguageEnum } from '@kado/core/language/enum';

it('use device preference if no user preference specified', () => {
	const { result } = renderHook(() => useContext(LocalizationAppLanguageContext), {
		wrapper: (props) => (
			<LocalizationDeviceLanguageContext.Provider value={CoreLanguageEnum.French}>
				<LocalizationAppLanguageProvider {...props} userPreference={null} />
			</LocalizationDeviceLanguageContext.Provider>
		),
	});
	expect(result.current).toBe(CoreLanguageEnum.French);
});

it('prioritize user preference over device preference', () => {
	const { result } = renderHook(() => useContext(LocalizationAppLanguageContext), {
		wrapper: (props) => (
			<LocalizationDeviceLanguageContext.Provider value={CoreLanguageEnum.English}>
				<LocalizationAppLanguageProvider
					{...props}
					userPreference={CoreLanguageEnum.French}
				/>
			</LocalizationDeviceLanguageContext.Provider>
		),
	});
	expect(result.current).toBe(CoreLanguageEnum.French);
});

it("use English as a default if no user preference is specified and device preference doesn't supported by the app", () => {
	const { result } = renderHook(() => useContext(LocalizationAppLanguageContext), {
		wrapper: (props) => (
			<LocalizationDeviceLanguageContext.Provider value={null}>
				<LocalizationAppLanguageProvider {...props} userPreference={null} />
			</LocalizationDeviceLanguageContext.Provider>
		),
	});
	expect(result.current).toBe(CoreLanguageEnum.English);
});
