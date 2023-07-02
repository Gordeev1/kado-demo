import { createContext } from 'react';
import { CoreLanguageEnum } from '@kado/core/language/enum';

export const LocalizationDeviceLanguageContext = createContext<CoreLanguageEnum | null>(null);
