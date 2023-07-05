import React, { FunctionComponent, memo } from 'react';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { TypographyComponent } from '@kado/components/typography/component';
import { TouchableComponent } from '@kado/components/touchable/component';
import { IconComponent } from '@kado/components/icon/component';
import { CardInfoGroupItemComponentPropsInterface } from './component-props.interface';
import { CardInfoGroupItemStyled } from './styled';

export const CardInfoGroupItemComponent: FunctionComponent<CardInfoGroupItemComponentPropsInterface> =
	memo(({ label, withTopBorder, withBottomBorder, ...props }) => {
		const rightItem =
			'value' in props ? (
				['string', 'number'].includes(typeof props.value) ? (
					<TypographyComponent
						variant={TypographyVariantEnum.Bold}
						color={TypographyColorEnum.Main}
						size='sm'
						alignRight
						numberOfLines={1}>
						{props.value}
					</TypographyComponent>
				) : (
					props.value
				)
			) : 'onPress' in props ? (
				<IconComponent name='keyboard-arrow-right' />
			) : null;

		const content = (
			<CardInfoGroupItemStyled.Container
				withTopBorder={withTopBorder}
				withBottomBorder={withBottomBorder}>
				<CardInfoGroupItemStyled.Label size='sm' color={TypographyColorEnum.Secondary}>
					{label}
				</CardInfoGroupItemStyled.Label>
				{rightItem}
			</CardInfoGroupItemStyled.Container>
		);

		return 'onPress' in props ? (
			<TouchableComponent onPress={props.onPress} disabled={props.disabled}>
				{content}
			</TouchableComponent>
		) : (
			content
		);
	});
