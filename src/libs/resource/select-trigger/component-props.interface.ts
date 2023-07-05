import { ChainData, TokenData } from '@0xsquid/sdk';
import { SelectTriggerComponentPropsInterface } from '@kado/components/select/trigger/component-props.interface';

export interface ResourceSelectTriggerComponentPropsInterface
	extends Omit<SelectTriggerComponentPropsInterface, 'label' | 'description' | 'iconSource'> {
	token?: TokenData;
	chain?: ChainData;
}
