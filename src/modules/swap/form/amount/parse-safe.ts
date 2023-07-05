import { ethers } from 'ethers';

export const swapFormAmountParseSafe = (amount: string, decimals: number) => {
	try {
		return ethers.utils.parseUnits(amount, decimals);
	} catch (error) {
		return null;
	}
};
