import styled from 'styled-components/native';
import { SpacingComponent } from '@kado/components/spacing/component';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

export const CardContainerExpandableContentStyled = {
	Container: styled(SpacingComponent)`
		flex-direction: row;
		align-items: center;
		min-height: ${(p) => themeStyledUtils.scale(74)(p)}px;
	`,
};
