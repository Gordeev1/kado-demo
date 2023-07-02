import React, { FunctionComponent, useCallback } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { CoreNavigationScenesEnum } from '@kado/core/navigation/scenes.enum';
import { CoreNavigationParamsInterface } from '@kado/core/navigation/params.interface';
import { SwapScenes } from '../swap/scenes';
import { AppNavigator } from './navigator';
import { AppNavigationPropsInterface } from './navigation-props.interface';

export const AppNavigation: FunctionComponent<AppNavigationPropsInterface> = ({ onReady }) => {
	const navigationContainerRef = useNavigationContainerRef<CoreNavigationParamsInterface>();

	const handleContainerReady = useCallback(() => {
		onReady(navigationContainerRef);
	}, [onReady, navigationContainerRef]);

	const initialRouteName = CoreNavigationScenesEnum.SwapMain;

	return (
		<NavigationContainer<CoreNavigationParamsInterface>
			onReady={handleContainerReady}
			ref={navigationContainerRef}>
			<AppNavigator initialRouteName={initialRouteName}>{SwapScenes}</AppNavigator>
		</NavigationContainer>
	);
};
