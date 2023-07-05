import React from 'react';
import { QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppComponent } from './modules/app/component';
import { CoreMonitoring } from './core/monitoring';
import { apiQueryClient } from './libs/api/query-client';

function _Entry() {
	const bootstrapped = true;

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={apiQueryClient}>
				{bootstrapped && <AppComponent />}
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}

_Entry.displayName = 'Entry';

export const Entry = CoreMonitoring.trackApplication(_Entry);
