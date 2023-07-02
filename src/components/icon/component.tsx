import React, { FunctionComponent } from 'react';
import { useTheme } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';
import { IconComponentPropsInterface } from './component-props.interface';

export const IconComponent: FunctionComponent<IconComponentPropsInterface> = ({
	size = 16,
	allowScaling = true,
	...props
}) => {
	const { windowSize } = useTheme();
	const scaledSize = themeStyledUtils.scale(size)(windowSize);
	return <MaterialIcons size={allowScaling ? scaledSize : size} {...props} />;
};
