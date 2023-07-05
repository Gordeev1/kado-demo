import React, { FC } from 'react';
import { ButtonComponent } from '@kado/components/button/component';
import { TypographyComponent } from '@kado/components/typography/component';
import { ButtonVariantEnum } from '@kado/components/button/variant.enum';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { featureUnavailable } from '@kado/libs/feature/unavailable';
import { ButtonBaseSizeEnum } from '@kado/components/button/base/size.enum';
import { SwapFormDestinationComponentPropsInterface } from './component-props.interface';
import { SwapFormStyled } from '../styled';

export const SwapFormDestinationComponent: FC<SwapFormDestinationComponentPropsInterface> = ({
	...props
}) => {
	const { t } = useLocalicationResources();

	return (
		<SwapFormStyled.Row {...props}>
			<TypographyComponent size='md'>{t('swap.form.destination.label')}</TypographyComponent>
			<ButtonComponent
				size={ButtonBaseSizeEnum.Small}
				variant={ButtonVariantEnum.Primary}
				label={t('swap.form.destination.connect')}
				onPress={featureUnavailable.show}
			/>
		</SwapFormStyled.Row>
	);
};
