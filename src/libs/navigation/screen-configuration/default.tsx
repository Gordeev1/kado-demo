import React from 'react';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import { HeaderTitleProps } from '@react-navigation/elements';
import { RouteProp } from '@react-navigation/native';
import { CoreNavigationParamsInterface } from '@kado/core/navigation/params.interface';
import { ThemeInterface } from '@kado/libs/theme/interface';
import { libsPlatformUtils } from '@kado/libs/platform/utils';
import { StackHeaderTitleComponent } from '../stack-header/title/component';
import { StackHeaderBackButtonComponent } from '../stack-header/back-button/component';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

/**
 * Equals section spacing
 * TODO: map directly
 */
const headerContentPaddingHorizontal = 18;

export const navigationScreenConfigurationDefault = (
	props: { route: RouteProp<CoreNavigationParamsInterface> },
	theme: ThemeInterface,
) => {
	const headerContentPaddingBottom = libsPlatformUtils.isIOS
		? themeStyledUtils.scaleVertical(12.5)({ theme })
		: 6;

	return {
		headerStatusBarHeight: libsPlatformUtils.isIOS
			? Math.min(theme.insets.top + 10, 59)
			: undefined,
		headerBackTitleVisible: false,
		headerTitleAlign: 'center',
		/**
		 * NOTE: resetting all header titles by default to prevent unexpected behavior such as:
		 * - usage of scene name as header title in case we forgot to set our own and have not reset it manually
		 */
		title: '',
		/**
		 * TODO: write custom calculation function instead of using random percent as a replacement for https://github.com/react-navigation/react-navigation/blob/main/packages/elements/src/Header/Header.tsx#L251
		 */
		headerTitleContainerStyle: {
			maxWidth: '45%',
			paddingBottom: headerContentPaddingBottom,
		},
		headerLeftContainerStyle: {
			paddingStart: headerContentPaddingHorizontal,
			paddingBottom: headerContentPaddingBottom,
		},
		headerRightContainerStyle: {
			paddingEnd: headerContentPaddingHorizontal,
			paddingBottom: headerContentPaddingBottom,
		},
		headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
		headerTitle: (p: HeaderTitleProps) => <StackHeaderTitleComponent {...p} />,
		gestureResponseDistance: theme.windowSize.width * 0.9,
		gestureEnabled:
			props.route.params && 'gestureDisabled' in props.route.params
				? !props.route.params.gestureDisabled
				: undefined,
		headerBackImage: () => (
			<StackHeaderBackButtonComponent type={props.route.params?.backButtonType} />
		),
	};
};
