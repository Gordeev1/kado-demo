import { AppRegistry, LogBox, UIManager, Text, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { Root } from './src/root';

enableScreens();

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

if (!Text.defaultProps) {
	Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

if (!TextInput.defaultProps) {
	TextInput.defaultProps = {};
}
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => Root);

LogBox.ignoreAllLogs();
