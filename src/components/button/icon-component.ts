import styled from 'styled-components/native';
import { IconComponent } from '@kado/components/icon/component';
import { ButtonVariantEnum } from './variant.enum';

interface Props {
	buttonVariant?: ButtonVariantEnum;
	disabled?: boolean;
}

export const ButtonIconComponent = styled(IconComponent).attrs<Props>(
	({ buttonVariant, disabled, theme: { colors } }) => {
		const variant: ButtonVariantEnum = buttonVariant || ButtonVariantEnum.Primary;

		const inactiveColorKey = `button-${variant}-label-inactive` as const;

		if (disabled && inactiveColorKey in colors) {
			// @ts-ignore-next-line
			return { _color: colors[inactiveColorKey] };
		}

		return { _color: colors[`button-${variant}-label`] };
	},
)<Props>``;
