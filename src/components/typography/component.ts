import { FunctionComponent } from 'react';
import { TextProps } from 'react-native';
import Animated, { AnimateProps } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { TypographyComponentPropsInterface } from './component-props.interface';
import { TypographyStyles } from './styles';

export const TypographyComponent = styled(Animated.Text)<
	TypographyComponentPropsInterface & AnimateProps<TextProps>
>`
	${TypographyStyles}
` as FunctionComponent<TypographyComponentPropsInterface & AnimateProps<TextProps>>;
