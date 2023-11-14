import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

navBarCima: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161B21',
    padding: 15,
    position: 'absolute',
    top: 0, // Alinha no topo da tela
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#292E34',
    
},
  
textCima:{
    color: '#CBD2D8',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 240, // Adiciona uma margem entre os títulos
       
},

image:{
    width: 25,
    height: 25,
    
},
  
imageContainer:{
    borderRadius: 8,
    backgroundColor: '#21262C',
    
},
})