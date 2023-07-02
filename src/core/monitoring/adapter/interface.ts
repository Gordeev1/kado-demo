import { NavigationContainerRefWithCurrent } from '@react-navigation/core';
import { ComponentType } from 'react';

type MessagePayload = Record<string, unknown>;

export interface CoreMonitoringAdapterInterface {
	trackApplication: (app: ComponentType) => ComponentType;
	profileComponent: (component: ComponentType) => ComponentType;
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	registerNavigationContainer: (ref: NavigationContainerRefWithCurrent<any>) => void;
	identifyUser: (payload: null | { id: string }) => void;
	debug?: (message: string, payload?: MessagePayload) => void;
	log: (message: string, payload?: MessagePayload) => void;
	info: (message: string, payload?: MessagePayload) => void;
	warning: (message: string, payload?: MessagePayload) => void;
	error: (message: string, error: unknown, payload?: MessagePayload) => void;
	fatal: (message: string, error: unknown, payload?: MessagePayload) => void;
}
