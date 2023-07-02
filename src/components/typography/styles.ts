import { css } from 'styled-components/native';
import { TypographyColorEnum } from './color.enum';
import { typographyColors } from './colors';
import { typographySizes } from './sizes';
import { typographyVariants } from './variants';
import { TypographyVariantEnum } from './variant.enum';
import { TypographyComponentPropsInterface } from './component-props.interface';

export const TypographyStyles = css<TypographyComponentPropsInterface>`
	${(p) => typographySizes(p.size)};
	${(p) => typographyVariants[p.variant || TypographyVariantEnum.Regular]};
	color: ${(p) =>
		!p.color || p.color in typographyColors
			? typographyColors[(p.color || TypographyColorEnum.Main) as TypographyColorEnum](p)
			: p.color};
	${({ alignRight, alignCenter }) => {
		const align = alignRight ? 'right' : alignCenter ? 'center' : 'left';
		return `text-align: ${align}`;
	}}
	letter-spacing: 0;
	${(p) => 'flex' in p && `flex: ${p.flex || 1}`}
	${(p) => p.underline && 'textDecorationLine: underline'};
`;
