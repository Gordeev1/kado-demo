import { PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';
import { TypographyColorEnum } from './color.enum';
import { TypographySizeType } from './size.type';
import { TypographyVariantEnum } from './variant.enum';

export interface TypographyComponentPropsInterface extends PropsWithChildren {
	size: TypographySizeType;
	variant?: TypographyVariantEnum;
	color?: TypographyColorEnum | string;
	alignRight?: boolean;
	alignCenter?: boolean;
	flex?: number;
	underline?: boolean;
	style?: ViewStyle;
}
