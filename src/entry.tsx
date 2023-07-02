import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppComponent } from './modules/app/component';
import { CoreMonitoring } from './core/monitoring';

function _Entry() {
	const bootstrapped = true;

	return <SafeAreaProvider>{bootstrapped && <AppComponent />}</SafeAreaProvider>;
}

_Entry.displayName = 'Entry';

export const Entry = CoreMonitoring.trackApplication(_Entry);
