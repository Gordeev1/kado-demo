import { CoreNavigationParamsDefaultInterface } from './params-default.interface';
import { CoreNavigationScenesEnum } from './scenes.enum';

type WithDetailsParamsType<
	Params extends Record<CoreNavigationScenesEnum | string, Record<string, unknown> | undefined>,
> = {
	[K in keyof Params]: Params[K] extends undefined
		? CoreNavigationParamsDefaultInterface | undefined
		: Params[K] & (CoreNavigationParamsDefaultInterface | undefined);
};

export type CoreNavigationParamsInterface = WithDetailsParamsType<{
	[CoreNavigationScenesEnum.SwapMain]: undefined;
}>;
