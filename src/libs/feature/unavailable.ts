import { alertShow } from '@kado/libs/alert/show';
import { localicationResources } from '../localization/resources';

export const featureUnavailable = {
	show: () =>
		alertShow({
			title: localicationResources.t('feature-unavailable-alert.title'),
			message: localicationResources.t('feature-unavailable-alert.description'),
		}),
};
