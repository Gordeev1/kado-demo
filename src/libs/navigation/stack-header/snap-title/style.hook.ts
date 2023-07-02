import { useMemo } from 'react';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { SnapStackHeaderTitlePropsInterface } from './props.interface';

export const useStackHeaderSnapTitleStyle = ({
	distance,
	scrollY,
}: Pick<SnapStackHeaderTitlePropsInterface, 'distance' | 'scrollY'>) => {
	const headerStyle = useAnimatedStyle(() => {
		const triggerPoint = distance - 30;
		const opacity = interpolate(
			scrollY.value,
			[0, triggerPoint, distance, distance + 1],
			[0, 0, 1, 1],
		);
		const translateY = interpolate(
			scrollY.value,
			[0, triggerPoint, distance, distance + 1],
			[10, 10, 0, 0],
		);
		return { transform: [{ translateY }], opacity };
	}, [scrollY, distance]);

	return useMemo(() => [{ opacity: 0 }, headerStyle], [headerStyle]);
};
