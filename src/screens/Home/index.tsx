import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { NavBarTop } from '../../components/NavBarTop';

export const Home = () => {
    return (
        <View style={styles.container}>
            <NavBarTop/>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >Development servers</Text>
                <Text style={styles.titleHelp} >HELP</Text>
            </View>
            <View style={styles.cardCentral}>
                <Text style={styles.title1} >Start a local development server with:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="npx expo start"
                    placeholderTextColor="#a9a9a9"
                    editable={false}
                />
                <Text style={styles.title2}>Select the local server when it appears here.</Text>
            </View>
        </View>
    )
}
