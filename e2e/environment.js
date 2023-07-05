const {
	DetoxCircusEnvironment,
	SpecReporter,
	WorkerAssignReporter,
} = require('detox/runners/jest-circus');

class DetoxEnvironment extends DetoxCircusEnvironment {
	constructor(config, context) {
		super(config, context);

		this.initTimeout = 300000;

		this.registerListeners({
			SpecReporter,
			WorkerAssignReporter,
		});
	}
}

module.exports = DetoxEnvironment;
