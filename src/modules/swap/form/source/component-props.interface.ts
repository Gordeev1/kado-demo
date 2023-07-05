import { SpacingComponentPropsInterface } from '@kado/components/spacing/component-props.interface';
import { SwapFormStateInterface } from '../state.interface';

export interface SwapFormSourceComponentPropsInterface extends SpacingComponentPropsInterface {
	onChange: (source: Partial<Pick<SwapFormStateInterface, 'fromChain' | 'fromToken'>>) => void;
}
