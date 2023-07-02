import { ButtonComponentPropsInterface } from '@kado/components/button/component-props.interface';
import { ButtonVariantEnum } from '@kado/components/button/variant.enum';
import { IconComponentPropsInterface } from '@kado/components/icon/component-props.interface';

export interface StackHeaderIconButtonComponentPropsInterface
	extends Pick<ButtonComponentPropsInterface, 'onPress' | 'loading' | 'disabled'> {
	variant?: ButtonVariantEnum.Thirdly;
	icon: IconComponentPropsInterface['name'] | JSX.Element;
}
