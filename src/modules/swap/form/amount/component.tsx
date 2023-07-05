import React, { FC } from 'react';
import { TypographyComponent } from '@kado/components/typography/component';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { InputTextComponent } from '@kado/components/input/text/component';
import { SpacingComponent } from '@kado/components/spacing/component';
import { Primitives } from '@kado/components/primitives';
import { formValueEligible } from '@kado/libs/form/value-eligible';
import { SwapFormStyled } from '../styled';
import { SwapFormAmountComponentPropsInterface } from './component-props.interface';

export const SwapFormAmountComponent: FC<SwapFormAmountComponentPropsInterface> = ({
	value,
	valueUSD,
	isLoading,
	onChange,
	children,
	...props
}) => {
	const { t } = useLocalicationResources();

	return (
		<SwapFormStyled.Card verticalPadding='s4' horizontalPadding='s4' {...props}>
			<SpacingComponent style={Primitives.Stretch} rightSpacing='s2'>
				<TypographyComponent
					numberOfLines={1}
					color={TypographyColorEnum.Secondary}
					size='sm'>
					{t('swap.form.amount.label')} {valueUSD && !isLoading ? `($${valueUSD})` : ''}
				</TypographyComponent>
				<SpacingComponent topSpacing='s2'>
					{/* TODO: add mask */}
					<InputTextComponent
						testID='swap.form.amount-input'
						keyboardType='decimal-pad'
						numberOfLines={1}
						filter={formValueEligible.filters.number}
						placeholder='0'
						value={value}
						onChangeText={onChange}
					/>
				</SpacingComponent>
			</SpacingComponent>
			{children}
		</SwapFormStyled.Card>
	);
};
