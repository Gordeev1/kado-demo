import React, { FC, memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { SelectTriggerComponent } from '@kado/components/select/trigger/component';
import { ResourceSelectTriggerComponentPropsInterface } from './component-props.interface';
import { ResourceSelectTriggerStyled } from './styled';

export const ResourceSelectTriggerComponent: FC<ResourceSelectTriggerComponentPropsInterface> =
	memo(({ token, chain, ...props }) => {
		const { t } = useLocalicationResources();

		const loading = !token || !chain;

		return loading ? (
			<ActivityIndicator size='small' />
		) : (
			<SelectTriggerComponent
				entering={FadeIn}
				icon={
					token.logoURI.endsWith('.svg') ? (
						<ResourceSelectTriggerStyled.Svg uri={token.logoURI} />
					) : (
						<ResourceSelectTriggerStyled.Image source={{ uri: token.logoURI }} />
					)
				}
				label={token.symbol}
				description={t('resource.chain.on', { chain: chain.networkName })}
				{...props}
			/>
		);
	});
