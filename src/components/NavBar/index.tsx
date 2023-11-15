import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const NavBar = () =>{
    return (
<View style={styles.navBar}>
<TouchableOpacity style={styles.column} activeOpacity={0.2}>
<Foundation name="home" size={25} color="#A499EA" />
<Text  style={styles.titleNavBarHome}>Home</Text>
</TouchableOpacity> 

<TouchableOpacity  style={styles.column} activeOpacity={0.2}>
<MaterialCommunityIcons name="file-table" size={25} color="#a9a9a9" />
<Text style={styles.titleNavBar}>Diagnostics</Text>
</TouchableOpacity>  

<TouchableOpacity style={styles.column} activeOpacity={0.2}>
<Ionicons name="ios-settings-sharp" size={25} color="#a9a9a9" />
<Text style={styles.titleNavBar}>Settings</Text>
</TouchableOpacity>
</View>
)}