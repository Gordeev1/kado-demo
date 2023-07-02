import { NavigationContainerRefWithCurrent } from '@react-navigation/core';
import { CoreNavigationParamsInterface } from './params.interface';
import { CoreNavigationServiceInterface } from './service.interface';

export class CoreNavigationService implements CoreNavigationServiceInterface {
	private container: NavigationContainerRefWithCurrent<CoreNavigationParamsInterface> | null =
		null;

	get instance() {
		return this.container;
	}

	registerContainer: CoreNavigationServiceInterface['registerContainer'] = (container) => {
		this.container = container;
	};
}
