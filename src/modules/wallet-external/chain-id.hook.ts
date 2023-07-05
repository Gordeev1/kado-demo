import { useEffect, useState } from 'react';
import type { IUniversalProvider } from '@walletconnect/universal-provider';
import { CoreMonitoring } from '@kado/core/monitoring';

export const useWalletExternalChainId = (provider: IUniversalProvider | undefined) => {
	const [chainId, setChainId] = useState<string | number | null>(null);

	/**
	 * TODO: listen to chain change
	 */
	useEffect(() => {
		if (!provider) {
			return;
		}

		provider
			.request<string | number>({ method: 'eth_chainId' })
			.then((chain) => {
				if (!chain) {
					return;
				}

				setChainId(chain);
			})
			.catch((error) => {
				CoreMonitoring.error('wallet-external/chain-id/fetch-failed', error);
			});
	}, [setChainId, provider]);

	return { chainId };
};
