import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';

export default function SplashScreen(){
    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Polybius
            </Text>

            <Image 
                style={styles.image}
                source={require('../assets/logoPolybius.png')}
            />


            <Text style={styles.text}>
                Francisco Salceek
            </Text>
            <Text style={styles.text}>
                Ignacio Fontanetto
            </Text>
            <Text style={styles.text}>
                Elías Charadía
            </Text>
            <Text style={styles.text}>
                Leandro Marecos 
            </Text>

            {/* <Pressable onPress={ () => router.push('/login')}>
                <Text>Clicleame</Text>
            </Pressable> */}


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
        fontSize: 44,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#ddc9b4',
        fontFamily: 'Bungee',

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
        height: 70,
        backgroundColor: '#2a3d45',
        fontFamily: 'monospace',
        borderRadius: 20,
        padding: 20,
        fontWeight: "900",
        marginBottom: 8

    },
    
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 12,
        marginTop: 12
    }
    
});