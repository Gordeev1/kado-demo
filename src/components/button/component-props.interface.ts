import { ButtonBaseComponentPropsInterface } from './base/component-props.interface';
import { ButtonVariantEnum } from './variant.enum';

export interface ButtonComponentPropsInterface extends ButtonBaseComponentPropsInterface {
	variant: ButtonVariantEnum;
}
