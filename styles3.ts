import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#0D1017',
    paddingTop: 80,
    paddingHorizontal: 20,
},

cardCentral: {
    backgroundColor: '#161B21',
    borderRadius: 8,
    padding: 17,
    margin: 26,
    borderWidth: 2, 
    borderColor: '#4A4F55',
    justifyContent: 'center',
    marginHorizontal: -10, // Ajustado para espaçamento horizontal
    marginVertical: 20, // Ajustado para espaçamento vertical
    
},

input: {
    outline: 0,
    height: 55,
    borderColor: '#4A4F55',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#21262C'
  
},

titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline', // Isso alinhará os títulos nas linhas de base
},

title: {
    fontSize: 15,
    color: '#a9a9a9',
    bottom:-10,
},

title1: {
    fontSize: 15,
    color: '#a9a9a9',
    bottom:5
},

title2: {
    fontSize: 15,
    color: '#a9a9a9',
    bottom:-5
},

titleHelp:{
  fontSize: 15,
  color: '#a9a9a9',
  bottom:-10,
  marginLeft: 175, // Adiciona uma margem entre os títulos
  
},

});
