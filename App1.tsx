import { Text, View, Image } from 'react-native';
import { styles } from './styles1';
import logo from './src/assets/logo.png';
import { Feather } from '@expo/vector-icons';

export default function App1() {
  return (
    <View style={styles.container}>
      <View>
      <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.title}>Expo</Text>
      <Feather name="loader" size={25} color="#45454533" style={styles.icon} />
    </View>
  );
}
