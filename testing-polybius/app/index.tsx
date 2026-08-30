import { View, Text } from 'react-native';
import SplashScreen from './splash';
import {useFonts} from 'expo-font'

export default function Index() {

  const [loaded] = useFonts({
    fuente: require('../assets/fonts/Bungee-Regular.ttf')
  });

  if (!loaded){
    return null
  }

  return <SplashScreen />;
}

