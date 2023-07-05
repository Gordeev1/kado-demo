import { ChainData, Squid, TokenData } from '@0xsquid/sdk';
import { SQUID_ROUTER_INTEGRATOR_ID, SQUID_ROUTER_URL } from '@kado/core/config';
import { tokenId } from '@kado/libs/token/id';

class _Squid extends Squid {
	private initJob: Promise<this> | null = null;
	public tokensMap: Map<string, TokenData> = new Map();
	public chainsMap: Map<string | number, ChainData> = new Map();

	initialize() {
		return this.initJob || this._init();
	}

	private async _init() {
		const job = async () => {
			try {
				await super.init();
				this.prepareData();
			} finally {
				this.initJob = null;
				return this;
			}
		};

		this.initJob = job();
		return this.initJob;
	}

	private prepareData() {
		this.tokensMap = new Map(this.tokens.map((token) => [tokenId.get(token), token]));
		this.chainsMap = new Map(this.chains.map((chain) => [chain.chainId, chain]));
	}
}

export const apiSquidRouter = new _Squid({
	baseUrl: SQUID_ROUTER_URL,
	integratorId: SQUID_ROUTER_INTEGRATOR_ID,
});
