import React, { FC, memo } from 'react';
import { ButtonComponent } from '@kado/components/button/component';
import { TypographyComponent } from '@kado/components/typography/component';
import { ButtonVariantEnum } from '@kado/components/button/variant.enum';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { WalletExternalConnectModalComponent } from '@kado/modules/wallet-external/connect/modal/component';
import { ButtonBaseSizeEnum } from '@kado/components/button/base/size.enum';
import { useWalletExternalConnect } from '@kado/modules/wallet-external/connect/hook';
import { featureUnavailable } from '@kado/libs/feature/unavailable';
import { useSwapFormSourceCredentials } from './credentials.hook';
import { SwapFormSourceComponentPropsInterface } from './component-props.interface';
import { SwapFormStyled } from '../styled';
import { Layout } from 'react-native-reanimated';

export const SwapFormSourceComponent: FC<SwapFormSourceComponentPropsInterface> = memo(
	({ onChange, ...props }) => {
		const { t } = useLocalicationResources();
		const { open, isConnected, address, provider } = useWalletExternalConnect();

		useSwapFormSourceCredentials({ onChange });

		const _connected = Boolean(isConnected && address);

		return (
			<SwapFormStyled.Row {...props}>
				<TypographyComponent size='md'>{t('swap.form.source.label')}</TypographyComponent>
				<ButtonComponent
					layout={Layout}
					size={ButtonBaseSizeEnum.Small}
					variant={
						isConnected && address
							? ButtonVariantEnum.Secondary
							: ButtonVariantEnum.Primary
					}
					loading={!provider}
					label={_connected ? address : t('swap.form.source.connect')}
					onPress={_connected ? featureUnavailable.show : open}
				/>
				<WalletExternalConnectModalComponent />
			</SwapFormStyled.Row>
		);
	},
);
