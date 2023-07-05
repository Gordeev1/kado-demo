import { useEffect } from 'react';
import { CoreMonitoring } from '@kado/core/monitoring';
import { useWalletExternalConnect } from '@kado/modules/wallet-external/connect/hook';
import { useApiSquidRouterData } from '@kado/libs/api/squid-router/data.hook';
import { useWalletExternalChainId } from '@kado/modules/wallet-external/chain-id.hook';
import { alertShow } from '@kado/libs/alert/show';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { SwapFormSourceComponentPropsInterface } from './component-props.interface';

export const useSwapFormSourceCredentials = ({
	onChange,
}: Pick<SwapFormSourceComponentPropsInterface, 'onChange'>) => {
	const { t } = useLocalicationResources();

	const { isConnected, provider } = useWalletExternalConnect();
	const { chainId } = useWalletExternalChainId((isConnected && provider) || undefined);

	const { data: api } = useApiSquidRouterData();

	const walletConnected = Boolean(isConnected && provider);

	useEffect(() => {
		if (!api) {
			return;
		}

		const defaultChainName = 'Ethereum';

		const chain = api.chains.find((_chain) =>
			walletConnected && chainId
				? _chain.chainId === chainId
				: _chain.chainName === defaultChainName,
		);

		if (!chain || !('chainNativeContracts' in chain)) {
			if (!walletConnected) {
				return;
			}

			return alertShow({
				title: t('swap.form.source.unsupported.title', { currency: 'USDC' }),
				message: t('swap.form.source.unsupported.description'),
				actions: [
					{
						text: t('swap.form.source.unsupported.actions.ok'),
						onPress: () => {
							if (!provider) {
								return;
							}

							return provider.disconnect().catch((error) => {
								CoreMonitoring.error(
									'swap/form/source/disconnect-unsupported-wallet-failed',
									error,
								);
							});
						},
					},
				],
			});
		}

		onChange({
			fromChain: chain.chainId,
			fromToken: chain.chainNativeContracts.usdcToken,
		});
	}, [walletConnected, api, chainId, t, provider, onChange]);
};
