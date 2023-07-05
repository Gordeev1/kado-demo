import { PropsWithChildren } from 'react';
import { CardContainerBaseComponentPropsInterface } from '@kado/components/card/container-base/component-props.interface';

export interface CardContainerExpandableComponentPropsInterface
	extends CardContainerBaseComponentPropsInterface,
		PropsWithChildren {
	renderContent: (icon: JSX.Element) => JSX.Element;
	disabled?: boolean;
}
