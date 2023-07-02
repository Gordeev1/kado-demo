import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { css } from 'styled-components/native';
import { TypographySizeType } from './size.type';

export const typographySizes = (size: TypographySizeType) => css`
	font-size: ${(p) => themeStyledUtils.scale(p.theme.fontSize[size][0])(p)}px;
	line-height: ${(p) => themeStyledUtils.scale(p.theme.fontSize[size][1])(p)}px;
`;
