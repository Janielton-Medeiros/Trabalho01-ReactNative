import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoadingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
type Props = {navigation:LoadingScreenNavigationProp}
export const TelaLoading = ({navigation}: Props) => {

  return (
  
    <TouchableOpacity  onPress={()=>navigation.navigate('Home',{})} style={styles.container}>
      <View >
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.title}>Expo</Text>
      <Feather name="loader" size={25} color="#45454533" style={styles.icon} />
    </TouchableOpacity>
    
  );
}
