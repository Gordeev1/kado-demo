import { SquidError } from '@0xsquid/sdk/dist/error';

export const apiSquidRouterGetErrorMessage = (error: SquidError) => {
	return error.errors && Array.isArray(error.errors)
		? error.errors
				.map((err) => err.message)
				.filter(Boolean)
				.join('\n')
		: error.message;
};
