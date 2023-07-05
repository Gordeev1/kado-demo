import { SpacingComponentPropsInterface } from '@kado/components/spacing/component-props.interface';
import { CardInfoGroupItemInterface } from './item/interface';

export interface CardInfoGroupComponentPropsInterface extends SpacingComponentPropsInterface {
	items: CardInfoGroupItemInterface[];
	floating?: boolean;
}
