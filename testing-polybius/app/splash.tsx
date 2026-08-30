import { View, Text, Image} from 'react-native';
import styles from "@/styles/styles";

export default function SplashScreen(){
    return(
        <View style={styles.container}>

            <Text style={{fontFamily: 'fuente', backgroundColor: 'black', color: 'white'}}>BATMAN</Text>

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

        </View>
        );
    }