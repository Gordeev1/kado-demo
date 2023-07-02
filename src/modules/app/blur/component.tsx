import React, { FunctionComponent } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet } from 'react-native';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';
import { AppBlurComponentPropsInterface } from './component-props.interface';

export const AppBlurComponent: FunctionComponent<AppBlurComponentPropsInterface> = () => {
	const { themeType } = useTheme();

	const appState = 'active';

	return appState !== 'active' ? (
		<Animated.View style={StyleSheet.absoluteFill} entering={FadeIn} exiting={FadeOut}>
			<BlurView
				style={StyleSheet.absoluteFill}
				blurType={themeType === CoreThemeTypeEnum.Light ? 'light' : 'dark'}
				reducedTransparencyFallbackColor={
					themeType === CoreThemeTypeEnum.Light ? 'white' : 'black'
				}
				blurAmount={6}
			/>
		</Animated.View>
	) : null;
};
