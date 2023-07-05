import styled from 'styled-components/native';
import { SpacingComponent } from '@kado/components/spacing/component';
import { ThemeInterface } from '@kado/libs/theme/interface';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

const valueSize: keyof ThemeInterface['fontSize'] = 'xl';

export const SwapFormQuoteStyled = {
	valueSize,
	Content: styled(SpacingComponent)`
		flex-direction: row;
		min-height: ${(p) => themeStyledUtils.scale(p.theme.fontSize[valueSize][1])(p)}px;
	`,
};
