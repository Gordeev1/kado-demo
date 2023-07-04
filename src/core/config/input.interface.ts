export interface CoreConfigInputInterface
	extends Record<
		| 'ENVIRONMENT'
		| 'SQUID_ROUTER_INTEGRATOR_ID'
		| 'SQUID_ROUTER_URL'
		| 'WALLET_CONNECT_PROJECT_ID',
		string
	> {}
