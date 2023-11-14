import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import logoBranca from '../../assets/logoBranca.png'
import { FontAwesome } from '@expo/vector-icons';

export const NavBarTop = () =>{
    return (
<View style={styles.navBarCima}>
<View >
<View style={styles.imageContainer}>
<Image source={logoBranca} style={styles.image}/>
</View>
</View>
<View>
<Text style={styles.textCima}>Expo Go</Text>  
</View>  
<View>
<FontAwesome name="user-circle-o" size={30} color="#FFEB8B" />    
</View> 
</View>
)}