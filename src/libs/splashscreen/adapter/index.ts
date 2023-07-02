import { NativeModules } from 'react-native';
import { SplashscreenAdapterInterface } from './interface';

const { KadoSplashscreen } = NativeModules;

export class SplashscreenAdapter implements SplashscreenAdapterInterface {
	hide(): Promise<void> {
		return KadoSplashscreen.hide();
	}
}
