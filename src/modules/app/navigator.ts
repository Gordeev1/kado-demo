import styled from 'styled-components/native';
import { CoreNavigationStack } from '@kado/core/navigation/stack';
import { navigationScreenConfigurationDefault } from '@kado/libs/navigation/screen-configuration/default';

export const AppNavigator = styled(CoreNavigationStack.Navigator).attrs((p) => ({
	screenOptions: (props) => ({
		...(typeof navigationScreenConfigurationDefault === 'function'
			? navigationScreenConfigurationDefault(props, p.theme)
			: navigationScreenConfigurationDefault),
		headerStyle: {
			backgroundColor: p.theme.colors.background,
			shadowOpacity: 0,
			elevation: 0,
		},
		cardStyle: {
			backgroundColor: p.theme.colors.background,
		},
	}),
}))``;
