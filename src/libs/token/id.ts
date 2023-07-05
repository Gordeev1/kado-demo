import { TokenData } from '@0xsquid/sdk';

export const tokenId = {
	get: (token: Pick<TokenData, 'chainId' | 'address'>) =>
		[token.chainId, token.address].join('-'),
};
