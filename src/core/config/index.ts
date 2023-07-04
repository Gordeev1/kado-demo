import Config from 'react-native-config';
import { CoreEnvironmentEnum } from '../environment/enum';
import { CoreConfigInputInterface } from './input.interface';

const {
	ENVIRONMENT: _ENVIRONMENT,
	SQUID_ROUTER_URL,
	SQUID_ROUTER_INTEGRATOR_ID,
	WALLET_CONNECT_PROJECT_ID,
} = Config as CoreConfigInputInterface;

if (!(_ENVIRONMENT in CoreEnvironmentEnum)) {
	throw new Error(
		`Invalid environment: ${_ENVIRONMENT}. Expected: ${Object.values(CoreEnvironmentEnum).join(
			', ',
		)}`,
	);
}

const ENVIRONMENT = _ENVIRONMENT as CoreEnvironmentEnum;

const IS_PRODUCTION = ENVIRONMENT === CoreEnvironmentEnum.Production;
const IS_STAGING = ENVIRONMENT === CoreEnvironmentEnum.Staging;

const IS_RELEASE_BUILD = process.env.NODE_ENV === 'production';

const LINKING_SCHEMA = 'kado://';

export {
	ENVIRONMENT,
	IS_PRODUCTION,
	IS_STAGING,
	IS_RELEASE_BUILD,
	SQUID_ROUTER_URL,
	SQUID_ROUTER_INTEGRATOR_ID,
	WALLET_CONNECT_PROJECT_ID,
	LINKING_SCHEMA,
};
