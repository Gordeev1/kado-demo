import React, { cloneElement, FunctionComponent, memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { Layout } from 'react-native-reanimated';
import { ButtonBaseComponentPropsInterface } from './component-props.interface';
import { ButtonBaseSizeEnum } from './size.enum';
import { ButtonBaseStyled } from './styled';

export const ButtonBaseComponent: FunctionComponent<ButtonBaseComponentPropsInterface> = memo(
	({
		label,
		loading,
		disabled,
		leftIcon,
		rightIcon,
		containerStyle,
		touchableContainerStyle,
		labelStyle,
		labelColor,
		spinnerColor,
		widthAuto,
		size = ButtonBaseSizeEnum.Base,
		radius = 'auto',
		...props
	}) => {
		return (
			<ButtonBaseStyled.Touchable
				disabled={disabled || loading}
				containerStyle={touchableContainerStyle}
				radius={radius}
				_size={size}
				{...props}>
				<ButtonBaseStyled.ContentContainer
					_size={size}
					style={containerStyle}
					layout={Layout}
					widthAuto={widthAuto}
					radius={radius}>
					{loading ? (
						<ActivityIndicator size='small' color={spinnerColor} />
					) : (
						<>
							{leftIcon ? cloneElement(leftIcon, { disabled }) : null}
							{label ? (
								<ButtonBaseStyled.Label
									leftMargin={Boolean(leftIcon)}
									rightMargin={Boolean(rightIcon)}
									_size={size}
									style={labelStyle}
									color={labelColor}>
									{label}
								</ButtonBaseStyled.Label>
							) : null}
							{rightIcon ? cloneElement(rightIcon, { disabled }) : null}
						</>
					)}
				</ButtonBaseStyled.ContentContainer>
			</ButtonBaseStyled.Touchable>
		);
	},
);
