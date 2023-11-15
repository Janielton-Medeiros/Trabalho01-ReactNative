import { TelaLoading } from '../../screens/TelaLoading'
import { Home } from '../../screens/Home'
import { Diagnostics } from '../../screens/Diagnostics';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    TelaLoading: {};
    Home: {};
    Diagnostics: {};
}
export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='TelaLoading' screenOptions={{headerShown: false}}>
            <Stack.Screen name="TelaLoading" component={TelaLoading} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Diagnostics" component={Diagnostics} />
        </Stack.Navigator>
    )
}