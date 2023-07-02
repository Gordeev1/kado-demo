import { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Animated, { AnimateProps } from 'react-native-reanimated';
import { TypographyComponentPropsInterface } from './component-props.interface';
import { TypographyStyles } from './styles';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type Props = TypographyComponentPropsInterface & AnimateProps<TextInputProps>;

export const TypographyComponentAnimateable = styled(AnimatedTextInput).attrs({
	editable: false,
})<Props>`
	${TypographyStyles}
` as FunctionComponent<Props>;
