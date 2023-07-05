import { ThemeInterface } from '@kado/libs/theme/interface';
import { CardContainerVariantEnum } from './variant.enum';

type Radius = keyof ThemeInterface['radius'];

export interface CardContainerComponentPropsInterface {
	radius?: Radius | null;
	transparent?: boolean;
	withBorder?: boolean;
	variant?: CardContainerVariantEnum;
}
