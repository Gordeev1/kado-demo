import React from 'react';
import { WalletConnectModal } from '@walletconnect/modal-react-native';
import { LINKING_SCHEMA, WALLET_CONNECT_PROJECT_ID } from '@kado/core/config';

const websiteUrl = 'https://kado.money';

const providerMetadata = {
	name: 'Kado',
	description: 'Kado swap demo',
	url: websiteUrl,
	icons: [
		'https://assets.website-files.com/62f3e11887c55400697aca78/62f3e1db0d180f265817350d_Webclip_.svg',
	],
	redirect: {
		native: LINKING_SCHEMA,
		universal: websiteUrl,
	},
};

export const WalletExternalConnectModalComponent = () => {
	return (
		<WalletConnectModal
			projectId={WALLET_CONNECT_PROJECT_ID}
			providerMetadata={providerMetadata}
		/>
	);
};
