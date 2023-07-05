import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import styled, { css } from 'styled-components/native';
import { themeStyledUtils } from '@kado/libs/theme/styled/utils';

const logo = css`
	width: ${themeStyledUtils.scale(30)}px;
	height: ${themeStyledUtils.scale(30)}px;
	border-radius: ${themeStyledUtils.scale(15)}px;
`;

export const ResourceSelectTriggerStyled = {
	Svg: styled(SvgUri)`
		${logo};
	`,
	Image: styled(Image)`
		${logo};
	`,
};
