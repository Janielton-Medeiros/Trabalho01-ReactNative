import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
container: {
    flex: 1,
    backgroundColor: '#0D1017',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 30,
},
navBarCima:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#161B21',
    padding: 15,
    position: 'absolute', 
    top: 0, // Mudança para o topo
    left: 0, 
    right: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#292E34',
},
title:{
    fontSize: 20,
    color: '#a9a9a9',
    textAlign: 'center',
    fontWeight: '600'   
},
titleCard:{
    fontSize: 17,
    color: '#a9a9a9',
    fontWeight: '600'   
},
textCard:{
    fontSize: 15,
    color: '#a9a9a9',
},
cardCentral: {
    backgroundColor: '#161B21',
    borderRadius: 10,
    padding: 5,
    margin: 26,
    borderWidth: 2, 
    borderColor: '#4A4F55',
    justifyContent: 'center',
    marginHorizontal: -18, // Ajustado para espaçamento horizontal
    marginVertical: 8, // Ajustado para espaçamento vertical
},
seta:{

    marginLeft: 325,
    bottom: 20
}
});
