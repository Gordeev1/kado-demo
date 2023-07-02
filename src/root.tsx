import React, { FunctionComponent, useEffect, useState } from 'react';

let Entry: FunctionComponent | null = null;

/**
 * NOTE:
 * `isHeadless` tells that app has been launched in the background by iOS (ATM only in case of background push-notification).
 * So, we don't need to render the whole application and run all of the underlining services (e.g. sagas)
 *
 * Reference - https://rnfirebase.io/messaging/usage#background-application-state
 */
export function Root({ isHeadless }: { isHeadless?: boolean }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!isHeadless) {
			Entry = require('@kado/entry').Entry;
			setLoaded(true);
		}
	}, [isHeadless]);

	if (isHeadless) {
		return null;
	}

	return loaded && Entry ? <Entry /> : null;
}
