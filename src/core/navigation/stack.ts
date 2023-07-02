import { createStackNavigator } from '@react-navigation/stack';
import { CoreNavigationParamsInterface } from './params.interface';

export const CoreNavigationStack = createStackNavigator<CoreNavigationParamsInterface>();
