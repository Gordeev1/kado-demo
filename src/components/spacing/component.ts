import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { SpacingComponentPropsInterface } from './component-props.interface';

export const SpacingComponent = styled(Animated.View)<SpacingComponentPropsInterface>`
	${(p) =>
		p.bottomSpacing &&
		`margin-bottom: ${themeStyledUtils.scaleVertical(p.theme.spacing[p.bottomSpacing])(p)}px;`};
	${(p) =>
		p.leftSpacing &&
		`margin-left: ${themeStyledUtils.scale(p.theme.spacing[p.leftSpacing])(p)}px;`};
	${(p) =>
		p.rightSpacing &&
		`margin-right: ${themeStyledUtils.scale(p.theme.spacing[p.rightSpacing])(p)}px;`};
	${(p) =>
		p.topSpacing &&
		`margin-top: ${themeStyledUtils.scaleVertical(p.theme.spacing[p.topSpacing])(p)}px;`}
	${(p) =>
		p.horizontalPadding &&
		`padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing[p.horizontalPadding])(p)}px;`}
	${(p) =>
		p.verticalPadding &&
		`padding-vertical: ${themeStyledUtils.scaleVertical(p.theme.spacing[p.verticalPadding])(
			p,
		)}px;`}
	${(p) =>
		p.topPadding &&
		`padding-top: ${themeStyledUtils.scaleVertical(p.theme.spacing[p.topPadding])(p)}px;`};
	${(p) =>
		p.bottomPadding &&
		`padding-bottom: ${themeStyledUtils.scaleVertical(p.theme.spacing[p.bottomPadding])(
			p,
		)}px;`};
	${(p) =>
		p.leftPadding &&
		`padding-left: ${themeStyledUtils.scale(p.theme.spacing[p.leftPadding])(p)}px;`};
	${(p) =>
		p.rightPadding &&
		`padding-right: ${themeStyledUtils.scale(p.theme.spacing[p.rightPadding])(p)}px;`};
`;
