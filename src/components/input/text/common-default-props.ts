import { Keyboard, TextInputProps } from 'react-native';

export const inputTextCommonDefaultProps: Partial<TextInputProps> = {
	blurOnSubmit: false,
	autoCorrect: false,
	autoCapitalize: 'sentences',
	allowFontScaling: false,
	underlineColorAndroid: undefined,
	onSubmitEditing: Keyboard.dismiss,
	maxLength: 100,
};
