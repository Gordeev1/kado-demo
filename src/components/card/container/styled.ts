import { css } from 'styled-components/native';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { CardContainerComponentPropsInterface } from './component-props.interface';

export const CardContainerStyled = css<CardContainerComponentPropsInterface>`
	border-radius: ${(p) =>
		p.radius === null ? 0 : themeStyledUtils.scale(p.theme.radius[p.radius || 'r3'])(p)}px;
	overflow: hidden;
	${(p) =>
		!p.transparent &&
		`
			background-color: ${p.theme.colors['card-background']};
		`}
	${(p) =>
		p.withBorder &&
		`
			border-width: 1px;
			border-color: ${p.theme.colors.border};
		`}
`;
