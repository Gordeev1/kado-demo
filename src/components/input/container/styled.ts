import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { TypographyComponent } from '@kado/components/typography/component';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { InputContainerComponentPropsInterface } from './component-props.interface';

export const InputContainerStyled = {
	InputContainer: styled(Animated.View)<
		Required<Pick<InputContainerComponentPropsInterface, 'variant'>>
	>`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	`,
	ErrorMessage: styled(TypographyComponent).attrs({
		size: 'sm',
		color: TypographyColorEnum.Error,
	})`
		margin-top: ${(p) => themeStyledUtils.scaleVertical(p.theme.spacing.s2)(p)}px;
		padding-horizontal: ${(p) => themeStyledUtils.scale(p.theme.spacing.s5)(p)}px;
	`,
};
