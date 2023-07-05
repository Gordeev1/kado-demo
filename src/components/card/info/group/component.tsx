import React, { FunctionComponent, useCallback } from 'react';
import { SpacingComponent } from '@kado/components/spacing/component';
import { CardInfoGroupItemComponent } from './item/component';
import { CardInfoGroupItemInterface } from './item/interface';
import { CardInfoGroupComponentPropsInterface } from './component-props.interface';

export const CardInfoGroupComponent: FunctionComponent<CardInfoGroupComponentPropsInterface> = ({
	items,
	floating = true,
	horizontalPadding = 's5',
	topPadding = floating ? 's3' : undefined,
	bottomPadding = 's3',
	...props
}) => {
	const renderItem = useCallback(
		(item: CardInfoGroupItemInterface, index: number, _items: unknown[]) => {
			return (
				<CardInfoGroupItemComponent
					key={item.label}
					{...item}
					withTopBorder={!floating || index !== 0}
				/>
			);
		},
		[floating],
	);

	return (
		<SpacingComponent
			horizontalPadding={horizontalPadding}
			topPadding={topPadding}
			bottomPadding={bottomPadding}
			{...props}>
			{items.map(renderItem)}
		</SpacingComponent>
	);
};
