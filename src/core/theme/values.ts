import merge from 'lodash/merge';
import { CoreThemeInterface } from './interface';
import { CoreThemeTypeEnum } from './type.enum';

/**
 * Color name: <name>-<tone>-<opacity>
 *
 * Name: natural color
 * Tone: 1 (darkest) - 10 (brightest)
 * Opacity: 1 - 100
 */
const palette = {
	'white-10-100': '#fff',
	'white-10-40': '#fff6',
	'dark-1-100': '#000',

	'green-7-100': '#76cc98',

	'grey-2-100': '#363636',
	'grey-5-100': '#838383',
	'grey-6-100': '#BABABA',
	'grey-8-100': '#d5d6df',
	'grey-8-10': '#d5d6df1A',

	'red-3-100': '#cf4f61',
	'red-5-100': '#de4646',

	'purple-7-100': '#3f76f0',
	'purple-7-20': '#3f76f033',
};

const darkTheme: CoreThemeInterface = {
	colors: {
		main: palette['white-10-100'],
		primary: palette['purple-7-100'],
		secondary: palette['grey-5-100'],
		thirdly: palette['grey-6-100'],
		white: palette['white-10-100'],
		positive: palette['green-7-100'],
		highlight: palette['red-5-100'],
		negative: palette['red-3-100'],
		background: palette['dark-1-100'],
		shadow: palette['grey-6-100'],
		border: palette['grey-2-100'],
		'button-primary-background': palette['purple-7-100'],
		'button-primary-background-inactive': palette['grey-8-10'],
		'button-primary-label': palette['white-10-100'],
		'button-primary-label-inactive': palette['white-10-40'],
		'button-secondary-background': palette['purple-7-20'],
		'button-secondary-label': palette['purple-7-100'],
		'button-thirdly-background': palette['grey-8-10'],
		'button-thirdly-label': palette['grey-5-100'],
		'icon-primary': palette['white-10-100'],
		'card-background': palette['grey-8-10'],
	},
	spacing: {
		s1: 3,
		s2: 6,
		s3: 9,
		s4: 12,
		s5: 15,
		s6: 18,
		s7: 21,
		's7.5': 25,
		s8: 27,
		s9: 33,
		s10: 39,
		s11: 47,
	},
	radius: {
		r1: 9,
		r2: 12.5,
		r3: 23,
		r4: 30,
		r5: 37,
	},
	fontSize: {
		xs: [12.5, 15.5],
		sm: [14.5, 18.5],
		md: [17.2, 21.2],
		lg: [20.5, 24.5],
		xl: [27.2, 32.5],
		xxl: [33.8, 40.5],
		xxxl: [43.8, 52.5],
		xxxxl: [53.8, 64.5],
	},
	fonts: {
		bold: 'NHaasGroteskDSPro-75Bd',
		medium: 'NHaasGroteskDSPro-65Md',
		regular: 'NHaasGroteskDSPro-55Rg',
	},
};

const lightTheme: CoreThemeInterface = merge({}, darkTheme);

export const coreThemeValues: Record<CoreThemeTypeEnum, CoreThemeInterface> = {
	[CoreThemeTypeEnum.Light]: lightTheme,
	[CoreThemeTypeEnum.Dark]: darkTheme,
};
