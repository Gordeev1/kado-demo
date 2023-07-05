import styled from 'styled-components/native';
import { SpacingComponent } from '@kado/components/spacing/component';
import { CardContainerBaseComponentPropsInterface } from './component-props.interface';
import { CardContainerStyled } from '../container/styled';

export const CardContainerBaseComponent = styled(
	SpacingComponent,
)<CardContainerBaseComponentPropsInterface>`
	${CardContainerStyled}
`;
