import React, { FunctionComponent } from 'react';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { TypographyComponent } from '@kado/components/typography/component';
import { StackHeaderTitleComponentPropsInterface } from './component-props.interface';

export const StackHeaderTitleComponent: FunctionComponent<
	StackHeaderTitleComponentPropsInterface
> = (props) => {
	return (
		<TypographyComponent
			accessibilityRole='header'
			numberOfLines={1}
			size='sm'
			variant={TypographyVariantEnum.Medium}
			color={TypographyColorEnum.Main}
			{...props}
		/>
	);
};
