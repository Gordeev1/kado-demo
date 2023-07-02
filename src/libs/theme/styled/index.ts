import 'styled-components/native';
import { ThemeInterface } from '../interface';

declare module 'styled-components/native' {
	type Theme = ThemeInterface;
	export interface DefaultTheme extends ThemeInterface {}
}
