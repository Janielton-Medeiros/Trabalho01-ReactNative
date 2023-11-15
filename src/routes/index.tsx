import { NavigationContainer, StackRouter } from '@react-navigation/native';
import React from 'react';
import { BottomTabRoutes } from './BottomTabNavigator';
import { StackRoutes } from './StackNavigator';

export const Routes = () => {
	return <NavigationContainer>
			{/* <StackRoutes/> */}
		<BottomTabRoutes />
	</NavigationContainer>
}

