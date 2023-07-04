import { useEffect } from 'react';
import { apiSquidRouter } from '.';

export const useSquidRouter = () => {
	useEffect(() => {
		if (!apiSquidRouter.initialized) {
			apiSquidRouter.init();
		}
	}, []);

	return apiSquidRouter;
};
