import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A2E',
    },

    title: {
        fontSize: 44,
        color: '#ddc9b4',
        fontFamily: 'fuente'
    },

    subtitle: {
        marginTop: 10,
        fontSize: 18,
        color: '#FFFFFF',
    },

    text: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontSize: 17,
        color: '#ddc9b4',
        width: 230,
        height: 60,
        backgroundColor: '#2a3d45',
        fontFamily: 'fuente',
        borderRadius: 20,
        padding: 20,
        fontWeight: "900",
        marginBottom: 8

    },
    
    image: {
        width: 240,
        height: 240,
        borderRadius: 20,
        marginBottom: 12,
        marginTop: 12
    }
    
});

export default styles;