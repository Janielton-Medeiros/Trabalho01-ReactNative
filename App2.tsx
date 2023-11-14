import { Text, View } from 'react-native';
import { styles } from './styles';
import { NavBar } from './src/components/NavBar';
import { AntDesign } from '@expo/vector-icons';


export default function App2() {
  return (
    <View style={styles.container}>
      <View style={styles.navBarCima}>
        <Text style={styles.title}>Diagnostics</Text>
      </View>
      <View style={styles.cardCentral}>
    <Text style={styles.titleCard} >Audio</Text>
    <AntDesign name="right" size={14} color="#a9a9a9" style={styles.seta}/>
    <Text style={styles.textCard} >On IOS you can play audio, choose whether it plays
    when the device is on silent, and set how the audio interacts with audio from other apps. 
    This diagnostic allows you yo see the available options.
    
    </Text>
    </View>
    <View style={styles.cardCentral}>
    <Text style={styles.titleCard} >Location (when app in use) </Text>
    <AntDesign name="right" size={14} color="#a9a9a9" style={styles.seta}/>
    <Text style={styles.textCard} >On IOS, there are different permissions for tracking your location.
    this diagnostic allows you to see what options are available and test the the functionality on your 
    device while you are using the app (background location is available only in standalone apps). None of the location data will leave your device.
    
    </Text>
    </View>
    <View style={styles.cardCentral}>
    <Text style={styles.titleCard} >Geofencing</Text>
    <AntDesign name="right" size={14} color="#a9a9a9" style={styles.seta}/>
    <Text style={styles.textCard} >You can fire actions when your device enters specific geographical
    regions represented by a longitude, latitude, and a radius. This diagnostic lets 
    you experiment with Geofencing using regions that you specify and shows you the data that is made 
    available. None of the data will leave your device.
    </Text>
    </View>
    <NavBar/>
      </View>

  );
}
