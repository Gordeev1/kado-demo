import styled from 'styled-components/native';
import { SpacingComponent } from '@kado/components/spacing/component';
import { CardContainerBaseComponent } from '@kado/components/card/container-base/component';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

export const SwapFormStyled = {
	Row: styled(SpacingComponent)`
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
	`,
	Card: styled(CardContainerBaseComponent)`
		flex-direction: row;
		align-items: center;
		min-height: ${themeStyledUtils.scale(85)}px;
	`,
};
