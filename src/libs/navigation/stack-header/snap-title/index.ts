import { useEffect } from 'react';
import { SnapStackHeaderTitlePropsInterface } from './props.interface';
import { useStackHeaderSnapTitleStyle } from './style.hook';

export const useStackHeaderSnapTitle = ({
	setNavigationOptions,
	scrollY,
	distance,
}: SnapStackHeaderTitlePropsInterface) => {
	const headerTitleStyle = useStackHeaderSnapTitleStyle({
		distance,
		scrollY,
	});

	useEffect(() => {
		setNavigationOptions({ headerTitleStyle });
	}, [setNavigationOptions, headerTitleStyle]);
};
