import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableComponent } from '@kado/components/touchable/component';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { TypographyComponent } from '@kado/components/typography/component';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { ThemeInterface } from '@kado/libs/theme/interface';
import { ButtonBaseSizeEnum } from './size.enum';
import { buttonBaseHeight } from './height';
import { ButtonBaseComponentPropsInterface } from './component-props.interface';

interface SizePropsInterface {
	_size: ButtonBaseSizeEnum;
}

interface RadiusPropsInterface extends Pick<ButtonBaseComponentPropsInterface, 'radius'> {}

const iconMarginBySize: Record<ButtonBaseSizeEnum, keyof ThemeInterface['spacing'] | null> = {
	[ButtonBaseSizeEnum.Large]: 's2',
	[ButtonBaseSizeEnum.Base]: 's2',
	[ButtonBaseSizeEnum.Compact]: 's2',
	[ButtonBaseSizeEnum.Medium]: 's2',
	[ButtonBaseSizeEnum.CompactExtra]: null,
	[ButtonBaseSizeEnum.Circle]: null,
	[ButtonBaseSizeEnum.CircleCompact]: null,
	[ButtonBaseSizeEnum.Small]: 's2',
};

export const ButtonBaseStyled = {
	Touchable: styled(TouchableComponent).attrs<SizePropsInterface & RadiusPropsInterface>((p) => ({
		containerStyle: Object.assign(
			{
				borderRadius: p.radius
					? themeStyledUtils.scale(
							p.radius === 'auto'
								? buttonBaseHeight[p._size] / 2
								: p.theme.radius[p.radius],
					  )(p)
					: 0,
				overflow: 'hidden',
			} as ViewStyle,
			p.containerStyle,
		),
	}))<SizePropsInterface & RadiusPropsInterface>``,
	ContentContainer: styled(Animated.View)<
		SizePropsInterface &
			RadiusPropsInterface &
			Pick<ButtonBaseComponentPropsInterface, 'widthAuto'>
	>`
		overflow: hidden;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		${(p) =>
			p.radius &&
			`
			border-radius: ${themeStyledUtils.scale(
				p.radius === 'auto' ? buttonBaseHeight[p._size] / 2 : p.theme.radius[p.radius],
			)(p)}px;
		`}
		height: ${(p) => themeStyledUtils.scale(buttonBaseHeight[p._size])(p)}px;
		${(p) => {
			switch (p._size) {
				case ButtonBaseSizeEnum.Large: {
					return `
						padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing.s6)(p)}px;
						min-width: ${themeStyledUtils.scale(130)(p)}px;
					`;
				}
				case ButtonBaseSizeEnum.Base: {
					return `
						padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing.s4)(p)}px;
						min-width: ${themeStyledUtils.scale(130)(p)}px;
					`;
				}
				case ButtonBaseSizeEnum.Medium:
				case ButtonBaseSizeEnum.Compact: {
					return `
						padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing.s4)(p)}px;
						min-width: ${themeStyledUtils.scale(120)(p)}px;
					`;
				}
				case ButtonBaseSizeEnum.CompactExtra: {
					return `
						padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing.s3)(p)}px;
						min-width: ${themeStyledUtils.scale(100)(p)}px;
					`;
				}
				case ButtonBaseSizeEnum.Small:
					return `
						padding-horizontal: ${themeStyledUtils.scale(p.theme.spacing.s2)(p)}px;
						min-width: ${themeStyledUtils.scale(60)(p)}px;
						max-width: ${themeStyledUtils.scale(120)(p)}px;
					`;
				case ButtonBaseSizeEnum.Circle:
				case ButtonBaseSizeEnum.CircleCompact: {
					return `width: ${themeStyledUtils.scale(buttonBaseHeight[p._size])(p)}px;`;
				}
			}
		}};
		${(p) => p.widthAuto && 'min-width: auto'};
	`,
	Label: styled(TypographyComponent).attrs({
		size: 'sm',
		numberOfLines: 1,
		ellipsizeMode: 'middle',
		variant: TypographyVariantEnum.Bold,
	})<
		SizePropsInterface & {
			leftMargin: boolean;
			rightMargin: boolean;
		}
	>`
		margin-left: ${(p) => {
			const spacing = iconMarginBySize[p._size];
			const value = spacing ? p.theme.spacing[spacing] : 0;
			return p.leftMargin ? themeStyledUtils.scale(value)(p) : 0;
		}}px;
		margin-right: ${(p) => {
			const spacing = iconMarginBySize[p._size];
			const value = spacing ? p.theme.spacing[spacing] : 0;
			return p.rightMargin ? themeStyledUtils.scale(value)(p) : 0;
		}}px;
	`,
};
