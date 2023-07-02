import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AnimateProps } from 'react-native-reanimated';
import { SpacingComponentPropsInterface } from '../spacing/component-props.interface';

export interface TouchableComponentPropsInterface
	extends ComponentProps<typeof TouchableOpacity>,
		Pick<AnimateProps<Record<string, unknown>>, 'entering' | 'exiting' | 'layout'>,
		Pick<
			SpacingComponentPropsInterface,
			'topSpacing' | 'bottomSpacing' | 'leftSpacing' | 'rightSpacing'
		> {
	feedback?: boolean;
	containerStyle?: AnimateProps<Record<string, unknown>>['style'];
	useDefault?: boolean;
}
