import React, { FC, memo, useCallback, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { TypographyComponent } from '@kado/components/typography/component';
import { SpacingComponent } from '@kado/components/spacing/component';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { CardInfoGroupItemInterface } from '@kado/components/card/info/group/item/interface';
import { CardContainerExpandableComponentPropsInterface } from '@kado/components/card/container-expandable/component-props.interface';
import { CardContainerExpandableContentTemplate } from '@kado/components/card/container-expandable/content/template';
import { CardContainerExpandableComponent } from '@kado/components/card/container-expandable/component';
import { CardInfoGroupComponent } from '@kado/components/card/info/group/component';
import { useLocalicationResources } from '@kado/libs/localization/resources.hook';
import { SwapFormFeeComponentPropsInterface } from './component-props.interface';

export const SwapFormFeeComponent: FC<SwapFormFeeComponentPropsInterface> = memo(
	({ isLoading, data = [], ...props }) => {
		const { t } = useLocalicationResources();

		const items = useMemo<CardInfoGroupItemInterface[]>(
			() =>
				data.map((fee) => ({
					label: fee.name,
					value: '$' + fee.amountUSD,
				})),
			[data],
		);

		const renderContent = useCallback<
			CardContainerExpandableComponentPropsInterface['renderContent']
		>(
			(icon) => {
				return (
					<CardContainerExpandableContentTemplate
						title={t('swap.form.fee.label')}
						value=''>
						{isLoading ? <ActivityIndicator size='small' /> : icon}
					</CardContainerExpandableContentTemplate>
				);
			},
			[t, isLoading],
		);

		return (
			<CardContainerExpandableComponent
				{...props}
				disabled={isLoading}
				renderContent={renderContent}>
				{items.length > 0 ? (
					<CardInfoGroupComponent floating={false} items={items} />
				) : (
					<SpacingComponent bottomSpacing='s5'>
						<TypographyComponent
							color={TypographyColorEnum.Secondary}
							size='sm'
							alignCenter>
							{t('swap.form.fee.empty')}
						</TypographyComponent>
					</SpacingComponent>
				)}
			</CardContainerExpandableComponent>
		);
	},
);
