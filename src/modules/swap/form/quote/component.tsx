import React, { FC, memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { Primitives } from '@kado/components/primitives';
import { TypographyComponent } from '@kado/components/typography/component';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { SpacingComponent } from '@kado/components/spacing/component';
import { SwapFormStyled } from '../styled';
import { SwapFormQuoteComponentPropsInterface } from './component-props.interface';
import { SwapFormQuoteStyled } from './styled';

export const SwapFormQuoteComponent: FC<SwapFormQuoteComponentPropsInterface> = memo(
	({ value, valueUSD, isLoading, children, ...props }) => {
		const { t } = useLocalicationResources();

		return (
			<SwapFormStyled.Card verticalPadding='s4' horizontalPadding='s4' {...props}>
				<SpacingComponent style={Primitives.Stretch} rightSpacing='s2'>
					<TypographyComponent
						numberOfLines={1}
						color={TypographyColorEnum.Secondary}
						size='sm'>
						{t('swap.form.quote.label')}{' '}
						{valueUSD && !isLoading ? `($${valueUSD})` : ''}
					</TypographyComponent>
					<SwapFormQuoteStyled.Content topSpacing='s2'>
						{isLoading ? (
							<ActivityIndicator />
						) : (
							<TypographyComponent
								testID='swap.form.quote.amount'
								numberOfLines={1}
								color={
									value ? TypographyColorEnum.Main : TypographyColorEnum.Secondary
								}
								variant={TypographyVariantEnum.Medium}
								size={SwapFormQuoteStyled.valueSize}>
								{value || '0'}
							</TypographyComponent>
						)}
					</SwapFormQuoteStyled.Content>
				</SpacingComponent>
				{children}
			</SwapFormStyled.Card>
		);
	},
);
