import { PropsWithChildren } from 'react';
import { ScrollViewProps } from 'react-native';

export interface SceneMinimalComponentPropsInterface extends PropsWithChildren<ScrollViewProps> {
	toolbar?: JSX.Element;
	keyboardAvoiding?: boolean;
}
