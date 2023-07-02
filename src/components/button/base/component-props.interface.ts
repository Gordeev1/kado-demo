import { TextStyle, ViewStyle } from 'react-native';
import { TouchableComponentPropsInterface } from '@kado/components/touchable/component-props.interface';
import { ButtonBaseSizeEnum } from './size.enum';
import { TypographyComponentPropsInterface } from '@kado/components/typography/component-props.interface';
import { ThemeInterface } from '@kado/libs/theme/interface';

export interface ButtonBaseComponentPropsInterface extends TouchableComponentPropsInterface {
	label?: string | JSX.Element;
	disabled?: boolean;
	loading?: boolean;
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	containerStyle?: ViewStyle;
	touchableContainerStyle?: ViewStyle;
	labelStyle?: TextStyle;
	labelColor?: TypographyComponentPropsInterface['color'];
	spinnerColor?: string;
	size?: ButtonBaseSizeEnum;
	widthAuto?: boolean;
	radius?: null | 'auto' | keyof ThemeInterface['radius'];
}
