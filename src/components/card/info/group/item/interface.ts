import { TouchableComponentPropsInterface } from '@kado/components/touchable/component-props.interface';

export type CardInfoGroupItemInterface = { label: string } & (
	| (Required<Pick<TouchableComponentPropsInterface, 'onPress'>> &
			Pick<TouchableComponentPropsInterface, 'disabled'>)
	| { value?: string | number | JSX.Element }
);
