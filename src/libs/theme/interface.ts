import { ScaledSize } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { CoreThemeInterface } from '@kado/core/theme/interface';
import { CoreThemeTypeEnum } from '@kado/core/theme/type.enum';

export interface ThemeInterface extends CoreThemeInterface {
	themeType: CoreThemeTypeEnum;
	insets: EdgeInsets;
	windowSize: ScaledSize;
}
