import React, { FunctionComponent } from 'react';
import { IconComponent } from '@kado/components/icon/component';
import { ButtonComponent } from '@kado/components/button/component';
import { ButtonVariantEnum } from '@kado/components/button/variant.enum';
import { ButtonBaseSizeEnum } from '@kado/components/button/base/size.enum';
import { StackHeaderIconButtonComponentPropsInterface } from './component-props.interface';

export const StackHeaderIconButtonComponent: FunctionComponent<
	StackHeaderIconButtonComponentPropsInterface
> = ({ icon, variant = ButtonVariantEnum.Thirdly, ...props }) => (
	<ButtonComponent
		variant={variant}
		size={ButtonBaseSizeEnum.CircleCompact}
		leftIcon={typeof icon === 'string' ? <IconComponent name={icon} /> : icon}
		{...props}
	/>
);
