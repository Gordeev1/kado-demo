import { ethers } from 'ethers';
import { useQuery } from 'react-query';
import { SquidError } from '@0xsquid/sdk/dist/error';
import { apiSquidRouter } from '@kado/libs/api/squid-router';
import { SwapFormStateInterface } from './state.interface';
import { RouteResponse } from '@0xsquid/sdk';

export const useSwapFormTxRoute = ({
	fromChain,
	fromToken,
	toToken,
	toChain,
	toAddress,
	amount,
}: SwapFormStateInterface & { amount: ethers.BigNumber | null }) => {
	const enabled = [fromChain, fromToken, toToken, toChain, amount && amount.gt(0)].every(Boolean);
	const fromAmount = amount ? amount.toString() : '0';

	/**
	 * TODO:
	 * - Refetch every X sec
	 * - Check cache invalidation timeout
	 */

	return useQuery<RouteResponse, SquidError>(
		['tx-route', fromChain, fromToken, toToken, toChain, fromAmount, toAddress],
		() => {
			return apiSquidRouter.getRoute({
				fromChain: fromChain!,
				toChain: toChain!,
				fromToken: fromToken!,
				toToken: toToken!,
				fromAmount,
				toAddress: toAddress || '',
				slippage: 1.5,
				quoteOnly: !toAddress,
			});
		},
		{
			enabled,
		},
	);
};
