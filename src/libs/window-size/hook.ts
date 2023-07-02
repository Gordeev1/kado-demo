import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export function useWindowSize(): ScaledSize {
	const [size, setSize] = useState(Dimensions.get('window'));

	const onChange = useCallback(
		({ window }: { window: ScaledSize; screen: ScaledSize }) => setSize(window),
		[setSize],
	);

	useEffect(() => {
		const listener = Dimensions.addEventListener('change', onChange);
		return () => listener.remove();
	}, [onChange]);

	return size;
}
