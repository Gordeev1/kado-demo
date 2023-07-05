import { FeeCost } from '@0xsquid/sdk';
import { CardContainerExpandableComponentPropsInterface } from '@kado/components/card/container-expandable/component-props.interface';

export interface SwapFormFeeComponentPropsInterface
	extends Omit<CardContainerExpandableComponentPropsInterface, 'renderContent'> {
	isLoading: boolean;
	data: FeeCost[] | undefined;
}
