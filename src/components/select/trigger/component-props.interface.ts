import { CardContainerTouchableComponentPropsInterface } from '@kado/components/card/container-touchable/component-props.interface';

export interface SelectTriggerComponentPropsInterface
	extends CardContainerTouchableComponentPropsInterface {
	label: string;
	description: string;
	icon?: JSX.Element;
}
