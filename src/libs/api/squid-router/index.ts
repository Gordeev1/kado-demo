import { Squid } from '@0xsquid/sdk';
import { SQUID_ROUTER_INTEGRATOR_ID, SQUID_ROUTER_URL } from '@kado/core/config';

class _Squid extends Squid {
	private initJob: Promise<void> | null = null;

	async init() {
		if (this.initJob) {
			return this.initJob;
		}
		try {
			this.initJob = super.init();
			await this.initJob;
		} finally {
			this.initJob = null;
		}
	}
}

export const apiSquidRouter = new _Squid({
	baseUrl: SQUID_ROUTER_URL,
	integratorId: SQUID_ROUTER_INTEGRATOR_ID,
});
