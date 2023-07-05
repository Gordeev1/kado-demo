import { useState, useCallback } from 'react';

export function useToogleState(initialState = false) {
	const [value, setValue] = useState(initialState);

	const enable = useCallback(() => setValue(true), [setValue]);
	const disable = useCallback(() => setValue(false), [setValue]);
	const toogle = useCallback(() => setValue((_value) => !_value), [setValue]);

	return { value, enable, disable, toogle };
}
