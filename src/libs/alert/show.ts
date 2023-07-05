import { Alert } from 'react-native';
import { AlertShowPropsInterface } from './show-props.interface';

export const alertShow = ({ title, message, actions, options }: AlertShowPropsInterface) => {
	Alert.alert(title, message, actions && actions.length > 0 ? actions : undefined, options);
};
