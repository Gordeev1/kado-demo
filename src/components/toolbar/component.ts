import styled from 'styled-components/native';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { ToolbarComponentPropsInterface } from './component-props.interface';

export const ToolbarComponent = styled.View<ToolbarComponentPropsInterface>`
	padding-left: ${(p) => themeStyledUtils.scale(p.theme.spacing.s11)(p) + p.theme.insets.left}px;
	padding-right: ${(p) =>
		themeStyledUtils.scale(p.theme.spacing.s11)(p) + p.theme.insets.right}px;
	padding-top: ${(p) => themeStyledUtils.scaleVertical(p.theme.spacing.s5)(p)}px;
	padding-bottom: ${(p) =>
		themeStyledUtils.scaleVertical(p.theme.spacing.s5)(p) + p.theme.insets.bottom}px;
	${(p) =>
		!p.transparent &&
		`
		background-color: ${p.theme.colors.background};
	`}
`;
