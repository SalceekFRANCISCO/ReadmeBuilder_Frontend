import { router } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home() {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Restaurante
            </Text>

            <Text style={styles.subtitle}>
                Trabajo Final Integrador
            </Text>

            <Text style={styles.text}>
              Francisco Salceek
              Ignacio Fontannettto
              Elías Damián Charadía
              Leandro Isaac Marecos Brizuela
            </Text>

            <Pressable onPress={ () => router.push('/login')}>
              <Text>Clicleame</Text>
            </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A2E',
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
        fontSize: 15,
        color: '#a9a7a7',
    },

});