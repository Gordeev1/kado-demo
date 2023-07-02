import { CoreMonitoringAdapterInterface } from './adapter/interface';
import { CoreMonitoringServiceInterface } from './service.interface';

export class CoreMonitoringService implements CoreMonitoringServiceInterface {
	constructor(private adapter: CoreMonitoringAdapterInterface | undefined) {}

	trackApplication: CoreMonitoringServiceInterface['trackApplication'] = (component) => {
		if (!this.adapter) {
			return component;
		}
		return this.adapter.trackApplication(component);
	};

	profileComponent: CoreMonitoringServiceInterface['profileComponent'] = (component) => {
		if (!this.adapter) {
			return component;
		}
		return this.adapter.profileComponent(component);
	};

	registerNavigationContainer: CoreMonitoringServiceInterface['registerNavigationContainer'] = (
		...args
	) => {
		this.adapter?.registerNavigationContainer(...args);
	};

	identifyUser: CoreMonitoringServiceInterface['identifyUser'] = (...args) => {
		this.adapter?.identifyUser(...args);
	};

	debug: CoreMonitoringServiceInterface['log'] = (...args) => {
		if (!this.adapter || !this.adapter.debug) {
			return;
		}
		this.adapter.debug(...args);
	};

	log: CoreMonitoringServiceInterface['log'] = (...args) => {
		this.adapter?.log(...args);
	};

	info: CoreMonitoringServiceInterface['info'] = (...args) => {
		this.adapter?.info(...args);
	};

	warning: CoreMonitoringServiceInterface['warning'] = (...args) => {
		this.adapter?.warning(...args);
	};

	error: CoreMonitoringServiceInterface['error'] = (message, error, payload) => {
		this.adapter?.error(message, error, payload);
	};

	fatal: CoreMonitoringServiceInterface['fatal'] = (...args) => {
		this.adapter?.fatal(...args);
	};
}
