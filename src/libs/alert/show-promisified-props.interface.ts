import { AlertButton } from 'react-native';
import { AlertShowPropsInterface } from './show-props.interface';

export interface AlertShowPromisifiedPropsInterface<T>
	extends Omit<AlertShowPropsInterface, 'actions'> {
	actions: Array<Omit<AlertButton, 'onPress'> & { id: T }>;
}
