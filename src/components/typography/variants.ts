import { css } from 'styled-components/native';
import { TypographyVariantEnum } from './variant.enum';

export const typographyVariants: Record<TypographyVariantEnum, ReturnType<typeof css>> = {
	[TypographyVariantEnum.Bold]: css`
		font-family: ${(p) => p.theme.fonts.bold};
	`,
	[TypographyVariantEnum.Medium]: css`
		font-family: ${(p) => p.theme.fonts.medium};
	`,
	[TypographyVariantEnum.Regular]: css`
		font-family: ${(p) => p.theme.fonts.regular};
	`,
};
