import { useEffect, useState } from 'react';
import { InteractionManager } from 'react-native';

export const useNavigationTransitionCompleted = () => {
	const [canMount, setCanMount] = useState(false);

	useEffect(() => {
		InteractionManager.runAfterInteractions(() => {
			setCanMount(true);
		});
	}, [setCanMount]);

	return canMount;
};
