import { tokenId } from '@kado/libs/token/id';
import { useApiSquidRouterData } from '@kado/libs/api/squid-router/data.hook';
import { SwapFormStateInterface } from './state.interface';

export const useSwapFormResources = (formState: Partial<SwapFormStateInterface>) => {
	const { data: api } = useApiSquidRouterData();

	if (!api) {
		return {
			fromChainDto: undefined,
			fromTokenDto: undefined,
			toChainDto: undefined,
			toTokenDto: undefined,
		};
	}

	return {
		fromChainDto: formState.fromChain ? api.chainsMap.get(formState.fromChain) : undefined,
		fromTokenDto:
			formState.fromChain && formState.fromToken
				? api.tokensMap.get(
						tokenId.get({ chainId: formState.fromChain, address: formState.fromToken }),
				  )
				: undefined,
		toChainDto: formState.toChain ? api.chainsMap.get(formState.toChain) : undefined,
		toTokenDto:
			formState.toChain && formState.toToken
				? api.tokensMap.get(
						tokenId.get({ chainId: formState.toChain, address: formState.toToken }),
				  )
				: undefined,
	};
};
