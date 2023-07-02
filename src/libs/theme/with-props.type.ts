import { ThemedStyledProps } from 'styled-components';
import { ThemeInterface } from './interface';

export type ThemeWithPropsType<P = unknown> = ThemedStyledProps<P, ThemeInterface>;
