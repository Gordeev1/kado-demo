import React, { useCallback, useState } from 'react';
import { ethers } from 'ethers';
import { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { ResourceSelectTriggerComponent } from '@kado/libs/resource/select-trigger/component';
import { featureUnavailable } from '@kado/libs/feature/unavailable';
import { SpacingComponent } from '@kado/components/spacing/component';
import { TypographyComponent } from '@kado/components/typography/component';
import { SceneMinimalComponent } from '@kado/components/scene/minimal/component';
import { ButtonComponent } from '@kado/components/button/component';
import { ButtonVariantEnum } from '@kado/components/button/variant.enum';
import { ToolbarComponent } from '@kado/components/toolbar/component';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { apiSquidRouterGetErrorMessage } from '@kado/libs/api/squid-router/error-message';
import { SwapFormQuoteComponent } from './quote/component';
import { SwapFormSourceComponent } from './source/component';
import { SwapFormDestinationComponent } from './destination/component';
import { SwapFormAmountComponent } from './amount/component';
import { SwapFormStateInterface } from './state.interface';
import { SwapFormFeeComponent } from './fee/component';
import { useSwapFormResources } from './resources.hook';
import { useSwapFormTxRoute } from './tx-route.hook';
import { swapFormAmountParseSafe } from './amount/parse-safe';

export const SwapFormComponent = () => {
	const { t } = useLocalicationResources();

	const [amount, setAmount] = useState('');

	const [state, setState] = useState<SwapFormStateInterface>({
		fromChain: null,
		fromToken: null,
		toChain: 'osmosis-1',
		toToken: 'uusdc',
		toAddress: null,
	});

	const handleSourceChange = useCallback(
		(source: Partial<Pick<SwapFormStateInterface, 'fromChain' | 'fromToken'>>) => {
			setState((_state) => ({ ..._state, ...source }));
		},
		[setState],
	);

	const { fromChainDto, fromTokenDto, toChainDto, toTokenDto } = useSwapFormResources(state);

	const _amountFrom =
		amount && fromTokenDto ? swapFormAmountParseSafe(amount, fromTokenDto.decimals) : null;

	const amountInvalid = Boolean(amount && fromTokenDto && (!_amountFrom || _amountFrom?.lte(0)));

	const {
		data,
		error: txError,
		isLoading,
	} = useSwapFormTxRoute({ ...state, amount: _amountFrom });

	const _amountTo = data
		? ethers.utils.formatUnits(data.route.estimate.toAmount, toTokenDto?.decimals)
		: null;

	return (
		<SceneMinimalComponent
			toolbar={
				<ToolbarComponent>
					<ButtonComponent
						variant={ButtonVariantEnum.Primary}
						label={t('swap.form.actions.review')}
						disabled
					/>
				</ToolbarComponent>
			}>
			<SwapFormSourceComponent onChange={handleSourceChange} />
			<SwapFormAmountComponent
				topSpacing='s3'
				value={amount}
				onChange={setAmount}
				decimals={fromTokenDto ? fromTokenDto.decimals : 6}
				isLoading={isLoading}
				valueUSD={data ? data.route.estimate.fromAmountUSD : null}>
				<ResourceSelectTriggerComponent
					token={fromTokenDto}
					chain={fromChainDto}
					onPress={featureUnavailable.show}
				/>
			</SwapFormAmountComponent>
			{amountInvalid && (
				<SpacingComponent
					entering={FadeIn}
					exiting={FadeOut}
					layout={Layout}
					topSpacing='s3'>
					<TypographyComponent
						testID='swap.form.error.amount'
						size='sm'
						color={TypographyColorEnum.Error}>
						{t('swap.form.error.amount')}
					</TypographyComponent>
				</SpacingComponent>
			)}

			<SwapFormDestinationComponent layout={Layout} topSpacing='s5' />
			<SwapFormQuoteComponent
				layout={Layout}
				topSpacing='s3'
				isLoading={isLoading}
				value={_amountTo}
				valueUSD={data ? data.route.estimate.toAmountUSD : null}>
				<ResourceSelectTriggerComponent
					token={toTokenDto}
					chain={toChainDto}
					onPress={featureUnavailable.show}
				/>
			</SwapFormQuoteComponent>

			{txError && (
				<SpacingComponent
					entering={FadeIn}
					exiting={FadeOut}
					layout={Layout}
					topSpacing='s5'>
					<TypographyComponent
						testID='swap.form.tx-error'
						size='sm'
						color={TypographyColorEnum.Error}>
						{apiSquidRouterGetErrorMessage(txError)}
					</TypographyComponent>
				</SpacingComponent>
			)}

			<SwapFormFeeComponent
				layout={Layout}
				topSpacing='s5'
				isLoading={isLoading}
				data={data ? data.route.estimate.feeCosts : undefined}
			/>
		</SceneMinimalComponent>
	);
};
