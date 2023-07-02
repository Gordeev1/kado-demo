import React, { FunctionComponent, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { Splashscreen } from '@kado/libs/splashscreen';
import { CoreMonitoring } from '@kado/core/monitoring';
import { CoreNavigation } from '@kado/core/navigation';
import { CoreNavigationParamsInterface } from '@kado/core/navigation/params.interface';
import { LocalizationProvider } from '@kado/libs/localization/provider';
import { LocalizationDeviceLanguageProvider } from '@kado/libs/localization/device-language/provider';
import { LocalizationAppLanguageProvider } from '@kado/libs/localization/app-language/provider';
import { ThemeTypeProvider } from '@kado/libs/theme/type-provider';
import { ThemeProvider } from '@kado/libs/theme/provider';
import { AppBlurComponent } from './blur/component';
import { AppBarsComponent } from './bars/component';
import { AppNavigation } from './navigation';
import { appStyles } from './styles';

export const AppComponent: FunctionComponent = () => {
	const handleNavigationReady = useCallback(
		(navigationRef: NavigationContainerRefWithCurrent<CoreNavigationParamsInterface>) => {
			Splashscreen.hide();
			CoreNavigation.registerContainer(navigationRef);
			CoreMonitoring.registerNavigationContainer(navigationRef);
			// CoreAnalytics.registerNavigationContainer(navigationRef);
		},
		[],
	);

	const bootCompleted = true;

	return (
		<LocalizationDeviceLanguageProvider>
			<LocalizationAppLanguageProvider userPreference={null}>
				<LocalizationProvider>
					<ThemeTypeProvider userPreference={null}>
						<ThemeProvider>
							<GestureHandlerRootView style={appStyles.rootView}>
								{bootCompleted && <AppNavigation onReady={handleNavigationReady} />}
								<AppBlurComponent />
								<AppBarsComponent />
							</GestureHandlerRootView>
						</ThemeProvider>
					</ThemeTypeProvider>
				</LocalizationProvider>
			</LocalizationAppLanguageProvider>
		</LocalizationDeviceLanguageProvider>
	);
};

AppComponent.displayName = 'AppComponent';
