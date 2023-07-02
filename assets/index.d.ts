declare module '*.svg' {
	import { FunctionComponent } from 'react';
	import { AssetsSvgPropsInterface } from './svg-props.interface';
	const content: FunctionComponent<AssetsSvgPropsInterface>;
	export default content;
}
