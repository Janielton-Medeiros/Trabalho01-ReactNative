import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    image: {
        width: 70,
        height: 60,
        bottom: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#45454533',
        position: 'absolute',
        bottom: 30,
        right: 150,
    },
    icon: {
        position: 'absolute',
        bottom: 30,
        right: 210,
        alignSelf: 'center',
    },
});
