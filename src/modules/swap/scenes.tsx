import React from 'react';
import { CoreNavigationScenesEnum } from '@kado/core/navigation/scenes.enum';
import { CoreNavigationStack } from '@kado/core/navigation/stack';
import { SwapMainComponent } from './main/component';

export const SwapScenes = (
	<CoreNavigationStack.Group>
		<CoreNavigationStack.Screen
			name={CoreNavigationScenesEnum.SwapMain}
			component={SwapMainComponent}
		/>
	</CoreNavigationStack.Group>
);
