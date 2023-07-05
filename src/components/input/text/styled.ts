import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { typographyColors } from '@kado/components/typography/colors';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { ThemeWithPropsType } from '@kado/libs/theme/with-props.type';
import { typographyVariants } from '@kado/components/typography/variants';
import { typographySizes } from '@kado/components/typography/sizes';

const sharedStyles = css`
	${typographyVariants[TypographyVariantEnum.Medium]};
	${typographySizes('xl')};
	color: ${(p) => typographyColors[TypographyColorEnum.Main](p)};
	text-align: left;
	flex: 1;
	padding-vertical: 0;
	padding-horizontal: 0;
`;

const sharedAttrs = (p: ThemeWithPropsType): Partial<TextInputProps> => ({
	placeholderTextColor: typographyColors[TypographyColorEnum.Secondary](p),
	selectionColor: typographyColors[TypographyColorEnum.Brand](p),
});

export const InputTextStyled = {
	Text: styled(TextInput).attrs(sharedAttrs)`
		${sharedStyles}
	`,
};
