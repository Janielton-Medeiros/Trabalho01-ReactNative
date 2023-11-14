import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

navBar: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#161B21',
    padding: 4,
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    
},
column: {
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', // Centraliza verticalmente
    flex: 1, // Permite que a `column` cresça para ocupar todo o espaço disponível
  },
titleNavBar: {
    fontSize: 12,
    color: '#a9a9a9',
},
  
titleNavBarHome: {
    fontSize: 12,
    color: '#A499EA',
},
})