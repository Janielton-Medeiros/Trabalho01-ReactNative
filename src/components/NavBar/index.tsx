import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from './styles';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const NavBar = () =>{
    return (
<View style={styles.navBar}>
<View style={styles.column}>
<Foundation name="home" size={25} color="#A499EA" />
<Text  style={styles.titleNavBarHome}>Home</Text>
</View> 

<View  style={styles.column}>
<MaterialCommunityIcons name="file-table" size={25} color="#a9a9a9" />
<Text style={styles.titleNavBar}>Diagnostics</Text>
</View>  

<View style={styles.column}>
<Ionicons name="ios-settings-sharp" size={25} color="#a9a9a9" />
<Text style={styles.titleNavBar}>Settings</Text>
</View>
</View>
)}