import { ThemeWithPropsType } from '@kado/libs/theme/with-props.type';
import styled from 'styled-components/native';
import { ButtonBaseComponent } from './base/component';
import { ButtonComponentPropsInterface } from './component-props.interface';
import { ButtonVariantEnum } from './variant.enum';

function compose(p: ThemeWithPropsType<ButtonComponentPropsInterface>) {
	const {
		theme: { colors },
		disabled,
	} = p;

	switch (p.variant) {
		case ButtonVariantEnum.Primary: {
			return {
				containerStyle: {
					backgroundColor: disabled
						? colors['button-primary-background-inactive']
						: colors['button-primary-background'],
				},
				spinnerColor: colors['button-primary-label'],
				labelColor: disabled
					? colors['button-primary-label-inactive']
					: colors['button-primary-label'],
			};
		}
		case ButtonVariantEnum.Secondary: {
			return {
				containerStyle: { backgroundColor: colors['button-secondary-background'] },
				spinnerColor: colors['button-secondary-label'],
				labelColor: colors['button-secondary-label'],
			};
		}
		case ButtonVariantEnum.Thirdly: {
			return {
				containerStyle: { backgroundColor: colors['button-thirdly-background'] },
				spinnerColor: colors['button-thirdly-label'],
				labelColor: colors['button-thirdly-label'],
			};
		}
		default:
			return {};
	}
}

export const ButtonComponent = styled(ButtonBaseComponent).attrs<ButtonComponentPropsInterface>(
	(p) => {
		const { containerStyle, spinnerColor, labelColor } = compose(p);
		return {
			containerStyle:
				containerStyle || p.containerStyle
					? Object.assign({}, containerStyle, p.containerStyle)
					: undefined,
			spinnerColor,
			labelColor: p.labelColor || labelColor,
		};
	},
)<ButtonComponentPropsInterface>``;
