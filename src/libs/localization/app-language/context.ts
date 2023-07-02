import { createContext } from 'react';
import { CoreLanguageEnum } from '@kado/core/language/enum';

export const LocalizationAppLanguageContext = createContext<null | CoreLanguageEnum>(null);
