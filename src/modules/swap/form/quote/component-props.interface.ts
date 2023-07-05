import { PropsWithChildren } from 'react';
import { CardContainerBaseComponentPropsInterface } from '@kado/components/card/container-base/component-props.interface';

export interface SwapFormQuoteComponentPropsInterface
	extends CardContainerBaseComponentPropsInterface,
		PropsWithChildren {
	isLoading?: boolean;
	value: string | null;
	valueUSD: string | null;
}
