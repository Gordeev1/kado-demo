import { ComponentProps } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface IconComponentPropsInterface extends ComponentProps<typeof MaterialIcons> {
	allowScaling?: boolean;
}
