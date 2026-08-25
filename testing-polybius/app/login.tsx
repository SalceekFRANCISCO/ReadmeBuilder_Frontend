import { View, Text, StyleSheet } from 'react-native';

export default function Login() {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Iniciar sesión
            </Text>

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
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    },

});