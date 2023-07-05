import styled from 'styled-components/native';
import { TouchableComponent } from '@kado/components/touchable/component';
import { CardContainerTouchableComponentPropsInterface } from './component-props.interface';
import { CardContainerStyled } from '../container/styled';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

export const CardContainerTouchableComponent = styled(
	TouchableComponent,
).attrs<CardContainerTouchableComponentPropsInterface>((p) => ({
	containerStyle: Object.assign(
		{
			borderRadius: themeStyledUtils.scale(p.theme.radius[p.radius || 'r3'])(p),
			overflow: 'hidden',
		},
		p.containerStyle,
	),
}))<CardContainerTouchableComponentPropsInterface>`
	${CardContainerStyled}
`;
