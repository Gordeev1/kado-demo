import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

export const SceneMinimalStyled = {
	KeyboardAvoidingView: styled.KeyboardAvoidingView`
		flex: 1;
	`,
	ScrollView: styled(Animated.ScrollView).attrs((p) => ({
		contentContainerStyle: Object.assign(
			{
				paddingLeft: themeStyledUtils.scale(p.theme.spacing.s7)(p) + p.theme.insets.left,
				paddingRight: themeStyledUtils.scale(p.theme.spacing.s7)(p) + p.theme.insets.right,
				paddingBottom:
					themeStyledUtils.scaleVertical(p.theme.spacing.s7)(p) + p.theme.insets.bottom,
				paddingTop: themeStyledUtils.scaleVertical(p.theme.spacing.s7)(p),
			},
			p.contentContainerStyle,
		),
	}))`
		flex: 1;
	` as typeof Animated.ScrollView,
};
