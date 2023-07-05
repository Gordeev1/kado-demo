import { TextInputProps } from 'react-native';

export interface InputTextComponentPropsInterface extends TextInputProps {
	filter?: RegExp;
}
