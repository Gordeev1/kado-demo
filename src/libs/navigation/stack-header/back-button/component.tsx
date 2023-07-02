import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { StackHeaderIconButtonComponent } from '../icon-button/component';
import { StackHeaderBackButtonComponentPropsInterface } from './component-props.interface';
import { StackHeaderBackButtonEnum } from './type.enum';

export const StackHeaderBackButtonComponent = styled(
	StackHeaderIconButtonComponent,
).attrs<StackHeaderBackButtonComponentPropsInterface>((p) => ({
	icon: p.type === StackHeaderBackButtonEnum.Close ? 'close' : 'keyboard-arrow-left',
}))<StackHeaderBackButtonComponentPropsInterface>`` as FunctionComponent<StackHeaderBackButtonComponentPropsInterface>;
