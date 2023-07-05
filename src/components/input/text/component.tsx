import React, { forwardRef, useCallback } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { inputTextCommonDefaultProps } from './common-default-props';
import { InputTextComponentPropsInterface } from './component-props.interface';
import { InputTextStyled } from './styled';

export const InputTextComponent = forwardRef<TextInput, InputTextComponentPropsInterface>(
	({ filter, onChangeText, ...props }, ref) => {
		const handleChange = useCallback(
			(_value: string) => {
				if (!onChangeText) {
					return;
				}

				const value = filter ? _value.replace(filter, '') : _value;
				onChangeText(value);
			},
			[onChangeText, filter],
		);

		return (
			<InputTextStyled.Text
				ref={ref}
				onChangeText={handleChange}
				{...inputTextCommonDefaultProps}
				{...props}
			/>
		);
	},
);
