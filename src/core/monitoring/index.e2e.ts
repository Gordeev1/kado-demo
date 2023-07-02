import { CoreMonitoringService } from './service';

const emptyFn = () => {};

export const CoreMonitoring = new CoreMonitoringService({
	trackApplication: (component) => component,
	profileComponent: (component) => component,
	registerNavigationContainer: emptyFn,
	identifyUser: emptyFn,
	log: emptyFn,
	info: emptyFn,
	warning: emptyFn,
	error: emptyFn,
	fatal: emptyFn,
});
