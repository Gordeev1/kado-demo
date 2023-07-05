import { TouchableComponentPropsInterface } from '@kado/components/touchable/component-props.interface';
import { CardContainerComponentPropsInterface } from '../container/component-props.interface';

export interface CardContainerTouchableComponentPropsInterface
	extends CardContainerComponentPropsInterface,
		TouchableComponentPropsInterface {}
