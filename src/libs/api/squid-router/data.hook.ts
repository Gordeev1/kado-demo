import { useQuery } from 'react-query';
import { apiSquidRouter } from '.';

export const useApiSquidRouterData = () => {
	return useQuery('api-squid-router-data', async () => {
		if (!apiSquidRouter.initialized) {
			await apiSquidRouter.initialize();
		}

		if (!apiSquidRouter.initialized) {
			throw new Error('(useApiSquidRouterData) Failed to initialize');
		}

		return apiSquidRouter;
	});
};
