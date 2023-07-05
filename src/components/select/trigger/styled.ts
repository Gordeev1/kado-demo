import styled from 'styled-components/native';
import { CardContainerTouchableComponent } from '@kado/components/card/container-touchable/component';

export const SelectTriggerStyled = {
	Container: styled(CardContainerTouchableComponent)`
		flex-direction: row;
		align-items: center;
		padding-vertical: ${(p) => p.theme.spacing.s3}px;
		padding-horizontal: ${(p) => p.theme.spacing.s3}px;
	`,
};
