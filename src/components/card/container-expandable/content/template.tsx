import React, { FC, memo } from 'react';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { TypographyComponent } from '@kado/components/typography/component';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { CardContainerExpandableContentTemplateProps } from './template-props.interface';
import { CardContainerExpandableContentStyled } from './styled';

export const CardContainerExpandableContentTemplate: FC<CardContainerExpandableContentTemplateProps> =
	memo(
		({
			title,
			value,
			valueColor,
			verticalPadding = 's5',
			horizontalPadding = 's5',
			empty,
			children,
			...props
		}) => {
			return (
				<CardContainerExpandableContentStyled.Container
					verticalPadding={verticalPadding}
					horizontalPadding={horizontalPadding}
					{...props}>
					<TypographyComponent size='sm' variant={TypographyVariantEnum.Bold}>
						{title}
					</TypographyComponent>
					<TypographyComponent
						size='sm'
						flex={1}
						alignRight
						variant={TypographyVariantEnum.Bold}
						color={
							valueColor ||
							(empty ? TypographyColorEnum.Main : TypographyColorEnum.Brand)
						}>
						{value}
					</TypographyComponent>
					{children}
				</CardContainerExpandableContentStyled.Container>
			);
		},
	);
