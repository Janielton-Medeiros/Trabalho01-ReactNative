import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home';
import { TelaLoading } from '../../screens/TelaLoading';
import { Diagnostics } from '../../screens/Diagnostics';
import { Settings } from 'react-native';
import { Foundation, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export const BottomTabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName='TelaLoading' screenOptions={{
		headerShown: false,
		tabBarStyle: { backgroundColor: '#161B21', paddingBottom: 4 },
		tabBarInactiveTintColor: '#a9a9a9',
		tabBarActiveTintColor: '#A499EA'
	}}>

	<Tab.Screen 
	  	options={{
			tabBarIcon: (({color})=>(
				<Foundation name="home" size={25} color={color} />
				
			)) 
		}} 
		name="Home" 
		component={Home} 
	/>

	<Tab.Screen 
	  	options={{
			tabBarIcon: (({color})=>(
				<MaterialCommunityIcons name="file-table" size={25} color={color} />
			)) 
		}} 
		name="Diagnostics" 
		component={Diagnostics} 
	/>
	<Tab.Screen 
	  	options={{
			tabBarIcon: (({color})=>(
				<Ionicons name="ios-settings-sharp" size={25} color={color} />
			)) 
		}} 
		name="Settings" 
		component={Home} 
	/>
	<Tab.Screen 
		
	  	options={{
		tabBarStyle: { display: 'none' },
		tabBarIcon: () => null,
 		tabBarLabel: () => null,
		tabBarButton: () => null
	
		}} 
		name="TelaLoading" 
		component={TelaLoading} 

	/>


    </Tab.Navigator>
  );
}

