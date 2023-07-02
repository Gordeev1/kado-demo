import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CoreNavigationParamsInterface } from './params.interface';

export const useCoreNavigation = () => {
	const navigation = useNavigation<NavigationProp<CoreNavigationParamsInterface>>();
	return navigation;
};
