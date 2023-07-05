import React, { FC, useEffect, useState } from 'react';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { SwapFormComponent } from '../form/component';
import { SwapMainComponentPropsInterface } from './component-props.interface';
import { SwapMainStepEnum } from './step.enum';

export const SwapMainComponent: FC<SwapMainComponentPropsInterface> = ({ navigation }) => {
	const { t } = useLocalicationResources();

	const title = t('swap.main.title');
	useEffect(() => {
		navigation.setOptions({ title });
	}, [navigation, title]);

	const [step] = useState(SwapMainStepEnum.Form);

	switch (step) {
		case SwapMainStepEnum.Form:
			return <SwapFormComponent />;
		default:
			return null;
	}
};
