import { SplashscreenAdapterInterface } from './adapter/interface';

export class SplashscreenService {
	constructor(private adapter: SplashscreenAdapterInterface) {}

	hide(): Promise<void> {
		return this.adapter.hide();
	}
}
