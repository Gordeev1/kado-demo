import { CoreNavigationParamsInterface } from '@kado/core/navigation/params.interface';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';

export interface AppNavigationPropsInterface {
	onReady: (ref: NavigationContainerRefWithCurrent<CoreNavigationParamsInterface>) => void;
}
