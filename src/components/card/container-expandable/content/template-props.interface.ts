import { PropsWithChildren } from 'react';
import { SpacingComponentPropsInterface } from '@kado/components/spacing/component-props.interface';
import { TypographyColorEnum } from '@kado/components/typography/color.enum';

export interface CardContainerExpandableContentTemplateProps
	extends SpacingComponentPropsInterface,
		PropsWithChildren {
	title: string | JSX.Element;
	value: string;
	valueColor?: TypographyColorEnum;
	empty?: boolean;
}
