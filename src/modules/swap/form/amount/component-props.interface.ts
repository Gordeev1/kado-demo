import { PropsWithChildren } from 'react';
import { CardContainerBaseComponentPropsInterface } from '@kado/components/card/container-base/component-props.interface';

export interface SwapFormAmountComponentPropsInterface
	extends CardContainerBaseComponentPropsInterface,
		PropsWithChildren {
	value: string;
	onChange: (value: string) => void;
	decimals: number;
	isLoading?: boolean;
	valueUSD?: string | null;
}
