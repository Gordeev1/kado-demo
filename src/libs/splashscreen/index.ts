import { SplashscreenAdapter } from './adapter';
import { SplashscreenService } from './service';

/**
 * const adapter = Platform.select<SplashscreenAdapterInterface>({
 * 	android: new SplashscreenAdapterAndroid(),
 * 	ios: new SplashscreenAdapterIOS(),
 * })!;
 */

const adapter = new SplashscreenAdapter();

export const Splashscreen = new SplashscreenService(adapter);
