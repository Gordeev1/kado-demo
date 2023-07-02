import { ThemeInterface } from '@kado/libs/theme/interface';
import { ViewStyle } from 'react-native';
import { AnimateProps } from 'react-native-reanimated';

type Size = keyof ThemeInterface['spacing'];

export interface SpacingComponentPropsInterface extends Omit<AnimateProps<object>, 'style'> {
	topSpacing?: Size | null;
	leftSpacing?: Size | null;
	rightSpacing?: Size | null;
	bottomSpacing?: Size | null;
	horizontalPadding?: Size | null;
	verticalPadding?: Size | null;
	topPadding?: Size | null;
	bottomPadding?: Size | null;
	leftPadding?: Size | null;
	rightPadding?: Size | null;
	style?: AnimateProps<object>['style'] | ViewStyle;
}
