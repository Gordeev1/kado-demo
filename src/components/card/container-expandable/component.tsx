import React, { FC, memo, useEffect } from 'react';
import Animated, {
	FadeInUp,
	Layout,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { IconComponent } from '@kado/components/icon/component';
import { useToogleState } from '@kado/libs/hooks/toogle-state/hook';
import { CardContainerBaseComponent } from '@kado/components/card/container-base/component';
import { TouchableComponent } from '@kado/components/touchable/component';
import { SpacingComponent } from '@kado/components/spacing/component';
import { CardContainerExpandableComponentPropsInterface } from './component-props.interface';

export const CardContainerExpandableComponent: FC<CardContainerExpandableComponentPropsInterface> =
	memo(({ renderContent, children, disabled, ...props }) => {
		const { value: open, toogle } = useToogleState(false);
		const _open = useSharedValue(0);

		useEffect(() => {
			_open.value = withTiming(open ? 1 : 0);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [open]);

		const iconStyles = useAnimatedStyle(
			() => ({
				transform: [{ rotate: `${_open.value * 180}deg` }],
			}),
			[],
		);

		const icon = (
			<SpacingComponent leftSpacing='s5' style={iconStyles}>
				<IconComponent size={15} name='keyboard-arrow-down' />
			</SpacingComponent>
		);

		return (
			<CardContainerBaseComponent layout={Layout} {...props}>
				<TouchableComponent disabled={disabled} onPress={toogle}>
					{renderContent(icon)}
				</TouchableComponent>
				{open ? (
					<Animated.View entering={FadeInUp} layout={Layout}>
						{children}
					</Animated.View>
				) : null}
			</CardContainerBaseComponent>
		);
	});
