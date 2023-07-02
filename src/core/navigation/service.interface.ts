import { NavigationContainerRefWithCurrent } from '@react-navigation/core';
import { CoreNavigationParamsInterface } from './params.interface';

export interface CoreNavigationServiceInterface {
	registerContainer: (
		ref: NavigationContainerRefWithCurrent<CoreNavigationParamsInterface>,
	) => void;

	instance: NavigationContainerRefWithCurrent<CoreNavigationParamsInterface> | null;
}
