import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import logoBranca from '../../assets/logoBranca.png'


export const Settings = () => {
    return (
        <View style={styles.container}>

            <Image source={logoBranca} style={styles.image} />
            <Text style={styles.title}>EM CONSTRUÇÃO!</Text>

        </View>
    )
}