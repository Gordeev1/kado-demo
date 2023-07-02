import React, { FunctionComponent } from 'react';
import {
	TouchableOpacity as TouchableOpacityDefault,
	TouchableNativeFeedback as TouchableNativeFeedbackDefault,
} from 'react-native';
import {
	TouchableOpacity as TouchableOpacityGH,
	TouchableNativeFeedback as TouchableNativeFeedbackGH,
} from 'react-native-gesture-handler';
import { libsPlatformUtils } from '@kado/libs/platform/utils';
import { SpacingComponent } from '@kado/components/spacing/component';
import { TouchableComponentPropsInterface } from './component-props.interface';

const defaultHitSlop = {
	top: 10,
	left: 10,
	right: 10,
	bottom: 10,
};

const nativeFeedbackBackground = TouchableNativeFeedbackDefault.SelectableBackground();

export const TouchableComponent: FunctionComponent<TouchableComponentPropsInterface> = ({
	feedback = true,
	containerStyle,
	useDefault,
	entering,
	exiting,
	layout,
	topSpacing,
	bottomSpacing,
	leftSpacing,
	rightSpacing,
	...props
}) => {
	const containerProps = {
		entering,
		exiting,
		layout,
		topSpacing,
		bottomSpacing,
		leftSpacing,
		rightSpacing,
		style: containerStyle,
	};

	const TouchableNativeFeedback = useDefault
		? TouchableNativeFeedbackDefault
		: TouchableNativeFeedbackGH;
	const TouchableOpacity = useDefault ? TouchableOpacityDefault : TouchableOpacityGH;

	const button =
		libsPlatformUtils.isAndroid && feedback ? (
			<TouchableNativeFeedback
				background={nativeFeedbackBackground}
				hitSlop={defaultHitSlop}
				{...props}
			/>
		) : (
			<TouchableOpacity activeOpacity={0.7} hitSlop={defaultHitSlop} {...props} />
		);

	return <SpacingComponent {...containerProps}>{button}</SpacingComponent>;
};
