import { alertShow } from './show';
import { AlertShowPromisifiedPropsInterface } from './show-promisified-props.interface';

export async function alertShowPromisified<T>({
	title,
	message,
	actions,
	options,
}: AlertShowPromisifiedPropsInterface<T>): Promise<T> {
	return new Promise((resolve) => {
		const buttons = actions.map(({ id, ...action }) => ({
			...action,
			onPress: () => resolve(id),
		}));

		return alertShow({
			title,
			message,
			actions: buttons,
			options: { cancelable: false, ...(options || {}) },
		});
	});
}
