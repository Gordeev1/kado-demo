import { CoreMonitoringAdapterInterface } from '../adapter/interface';

const withColor: Record<string, (message: string) => string> = {
	debug: (message) => `\x1B[94m${message}\x1B[0m`,
	log: (message) => `\x1B[96m${message}\x1B[0m`,
	info: (message) => `\x1B[95m${message}\x1B[0m`,
	warning: (message) => `\x1B[92m${message}\x1B[0m`,
	error: (message) => `\x1B[91m${message}\x1B[0m`,
	fatal: (message) => `\x1B[91m${message}\x1B[0m`,
};

export class CoreMonitoringAdapterConsole implements CoreMonitoringAdapterInterface {
	trackApplication: CoreMonitoringAdapterInterface['trackApplication'] = (app) => app;
	profileComponent: CoreMonitoringAdapterInterface['profileComponent'] = (component) => component;
	registerNavigationContainer: CoreMonitoringAdapterInterface['registerNavigationContainer'] =
		() => {};

	private genericLogFactory =
		(method: keyof typeof withColor | string) =>
		(message: string, ...args: unknown[]) => {
			const colorize = withColor[method];

			// eslint-disable-next-line no-console
			console.log(
				method,
				`${colorize ? colorize(message) : message} ${args.length ? '->' : ''}`.trim(),
				...args,
			);
		};

	private identifyUserLog = this.genericLogFactory('identifyUser');
	identifyUser: CoreMonitoringAdapterInterface['identifyUser'] = (...args) =>
		this.identifyUserLog('', ...args);

	debug: CoreMonitoringAdapterInterface['debug'] = this.genericLogFactory('debug');
	log: CoreMonitoringAdapterInterface['log'] = this.genericLogFactory('log');
	info: CoreMonitoringAdapterInterface['info'] = this.genericLogFactory('info');
	warning: CoreMonitoringAdapterInterface['warning'] = this.genericLogFactory('warning');
	error: CoreMonitoringAdapterInterface['error'] = this.genericLogFactory('error');
	fatal: CoreMonitoringAdapterInterface['fatal'] = this.genericLogFactory('fatal');
}
