import { css } from 'styled-components/native';
import { PixelRatio, ScaledSize } from 'react-native';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';
import { ThemeWithPropsType } from '../with-props.type';

const DESIGN_TARGET_WIDTH = 390;
const DESIGN_TARGET_HEIGHT = 844;
const MAX_SCALE_FACTOR = 2;

const getScreenSizeAdjustingOrientation = ({ width, height }: ScaledSize) =>
	width < height ? [width, height] : [height, width];

const scale =
	(value: number) =>
	(params: ThemeWithPropsType<unknown> | ScaledSize): number => {
		const [width] = getScreenSizeAdjustingOrientation(
			'theme' in params ? params.theme.windowSize : params,
		);
		return PixelRatio.roundToNearestPixel(
			Math.min(width / DESIGN_TARGET_WIDTH, MAX_SCALE_FACTOR) * value,
		);
	};

const scaleFactor = (params: ThemeWithPropsType<unknown> | ScaledSize): number => {
	const [width] = getScreenSizeAdjustingOrientation(
		'theme' in params ? params.theme.windowSize : params,
	);

	return Math.min(width / DESIGN_TARGET_WIDTH, MAX_SCALE_FACTOR);
};

const scaleVertical =
	(value: number) =>
	(params: ThemeWithPropsType<unknown> | ScaledSize): number => {
		const [, height] = getScreenSizeAdjustingOrientation(
			'theme' in params ? params.theme.windowSize : params,
		);
		return PixelRatio.roundToNearestPixel(
			Math.min(height / DESIGN_TARGET_HEIGHT, MAX_SCALE_FACTOR) * value,
		);
	};

const scaleVerticalFactor = (params: ThemeWithPropsType<unknown> | ScaledSize): number => {
	const [, height] = getScreenSizeAdjustingOrientation(
		'theme' in params ? params.theme.windowSize : params,
	);

	return Math.min(height / DESIGN_TARGET_HEIGHT, MAX_SCALE_FACTOR);
};

const whenThemeFabric = (targetTheme: CoreThemeTypeEnum) => (code: string) =>
	css`
		${(p) => (p.theme.themeType === targetTheme ? code : '')};
	`;

const isThemeFabric = (targetTheme: CoreThemeTypeEnum) => (theme: CoreThemeTypeEnum) =>
	targetTheme === theme;

const isThemeLight = isThemeFabric(CoreThemeTypeEnum.Light);
const isThemeDark = isThemeFabric(CoreThemeTypeEnum.Dark);

const whenThemeLight = whenThemeFabric(CoreThemeTypeEnum.Light);
const whenThemeDark = whenThemeFabric(CoreThemeTypeEnum.Dark);

export const themeStyledUtils = {
	scale,
	scaleFactor,
	scaleVertical,
	scaleVerticalFactor,
	isThemeLight,
	isThemeDark,
	whenThemeLight,
	whenThemeDark,
};
