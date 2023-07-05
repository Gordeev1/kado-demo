import styled from 'styled-components/native';
import { TypographyComponent } from '@kado/components/typography/component';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { CardInfoGroupItemComponentPropsInterface } from './component-props.interface';

export const CardInfoGroupItemStyled = {
	Container: styled.View<
		Pick<CardInfoGroupItemComponentPropsInterface, 'withTopBorder' | 'withBottomBorder'>
	>`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		${(p) =>
			p.withBottomBorder &&
			`
			border-bottom-width: 1px;
			border-bottom-color: ${p.theme.colors.border};
		`}
		${(p) =>
			p.withTopBorder &&
			`
			border-top-width: 1px;
			border-top-color: ${p.theme.colors.border};
		`}
	`,
	Label: styled(TypographyComponent)`
		padding-vertical: ${(p) => themeStyledUtils.scaleVertical(p.theme.spacing.s5)(p)}px;
		margin-right: ${(p) => themeStyledUtils.scale(p.theme.spacing.s5)(p)}px;
		flex: 1;
	`,
};
