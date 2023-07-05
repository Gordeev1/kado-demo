import React, { forwardRef, PropsWithChildren } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { useTheme } from 'styled-components/native';
import { SceneMinimalStyled } from './styled';
import { SceneMinimalComponentRefType } from './component-ref.type';
import { SceneMinimalComponentPropsInterface } from './component-props.interface';

export const SceneMinimalComponent = forwardRef<
	SceneMinimalComponentRefType,
	PropsWithChildren<SceneMinimalComponentPropsInterface>
>(({ toolbar, children, keyboardAvoiding = true, ...props }, ref) => {
	const headerHeight = useHeaderHeight();
	const { insets } = useTheme();
	return (
		<SceneMinimalStyled.KeyboardAvoidingView
			behavior='padding'
			enabled={keyboardAvoiding}
			keyboardVerticalOffset={headerHeight - insets.bottom}>
			<SceneMinimalStyled.ScrollView ref={ref} keyboardShouldPersistTaps='handled' {...props}>
				{children}
			</SceneMinimalStyled.ScrollView>
			{toolbar}
		</SceneMinimalStyled.KeyboardAvoidingView>
	);
});
