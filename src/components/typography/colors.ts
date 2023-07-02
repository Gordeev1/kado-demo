import { ThemeWithPropsType } from '@kado/libs/theme/with-props.type';
import { TypographyColorEnum } from './color.enum';

export const typographyColors: Record<TypographyColorEnum, (theme: ThemeWithPropsType) => string> =
	{
		[TypographyColorEnum.Main]: ({ theme }) => theme.colors.main,
		[TypographyColorEnum.Secondary]: ({ theme }) => theme.colors.secondary,
		[TypographyColorEnum.Thirdly]: ({ theme }) => theme.colors.thirdly,
		[TypographyColorEnum.Error]: ({ theme }) => theme.colors.negative,
		[TypographyColorEnum.Success]: ({ theme }) => theme.colors.positive,
		[TypographyColorEnum.Brand]: ({ theme }) => theme.colors.primary,
		[TypographyColorEnum.Highlight]: ({ theme }) => theme.colors.negative,
		[TypographyColorEnum.White]: ({ theme }) => theme.colors.white,
	};
