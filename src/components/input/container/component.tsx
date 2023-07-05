import React, { FunctionComponent, memo, PropsWithChildren } from 'react';
import { InputContainerComponentPropsInterface } from './component-props.interface';
import { InputContainerStyled } from './styled';
import { InputContainerVariantEnum } from './variant.enum';

export const InputContainerComponent: FunctionComponent<
	PropsWithChildren<InputContainerComponentPropsInterface>
> = memo(
	({
		leftIcon,
		rightIcon,
		error,
		children,
		variant = InputContainerVariantEnum.Base,
		...props
	}) => {
		return (
			<>
				<InputContainerStyled.InputContainer variant={variant} {...props}>
					{React.isValidElement(leftIcon) ? leftIcon : null}
					{children}
					{React.isValidElement(rightIcon) ? rightIcon : null}
				</InputContainerStyled.InputContainer>
				{error ? (
					<InputContainerStyled.ErrorMessage>{error}</InputContainerStyled.ErrorMessage>
				) : null}
			</>
		);
	},
);
