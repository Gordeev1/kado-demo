import React, { FC, memo } from 'react';
import { TypographyComponent } from '@kado/components/typography/component';
import { SpacingComponent } from '@kado/components/spacing/component';
import { IconComponent } from '@kado/components/icon/component';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';
import { SelectTriggerComponentPropsInterface } from './component-props.interface';
import { TypographyVariantEnum } from '@kado/components/typography/variant.enum';
import { SelectTriggerStyled } from './styled';

export const SelectTriggerComponent: FC<SelectTriggerComponentPropsInterface> = memo(
	({ label, description, icon, ...props }) => {
		return (
			<SelectTriggerStyled.Container {...props}>
				{icon}
				<SpacingComponent leftSpacing={icon ? 's2' : undefined} rightSpacing='s2'>
					<TypographyComponent size='sm' variant={TypographyVariantEnum.Medium}>
						{label}
					</TypographyComponent>
					<TypographyComponent size='xs' color={TypographyColorEnum.Secondary}>
						{description}
					</TypographyComponent>
				</SpacingComponent>
				<IconComponent name='keyboard-arrow-down' />
			</SelectTriggerStyled.Container>
		);
	},
);
