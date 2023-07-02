import { CoreNavigationParamsInterface } from '@kado/core/navigation/params.interface';
import { CoreNavigationScenesEnum } from '@kado/core/navigation/scenes.enum';
import { StackScreenProps } from '@react-navigation/stack';

export interface SwapMainComponentPropsInterface
	extends StackScreenProps<CoreNavigationParamsInterface, CoreNavigationScenesEnum.SwapMain> {}
