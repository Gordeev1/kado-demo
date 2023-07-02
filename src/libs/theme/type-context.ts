import { createContext } from 'react';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';

export const ThemeTypeContext = createContext<CoreThemeTypeEnum>(CoreThemeTypeEnum.Light);
