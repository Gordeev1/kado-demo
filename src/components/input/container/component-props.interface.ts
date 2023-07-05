import { AnimateProps } from 'react-native-reanimated';
import { InputContainerVariantEnum } from './variant.enum';

export interface InputContainerComponentPropsInterface
	extends AnimateProps<Record<string, unknown>> {
	error?: string;
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	variant?: InputContainerVariantEnum;
}
