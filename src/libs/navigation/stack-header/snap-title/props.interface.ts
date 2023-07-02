import { StackNavigationOptions } from '@react-navigation/stack';
import { SharedValue } from 'react-native-reanimated';

export interface SnapStackHeaderTitlePropsInterface {
	setNavigationOptions: (options: Partial<StackNavigationOptions>) => void;
	distance: number;
	scrollY: SharedValue<number>;
}
