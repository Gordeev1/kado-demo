import { AlertButton, AlertOptions } from 'react-native';

export interface AlertShowPropsInterface {
	title: string;
	message?: string;
	actions?: AlertButton[];
	options?: AlertOptions;
}
