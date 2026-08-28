import SplashScreen from './splash';
import {useFonts} from 'expo-font'

export default function Index() {

  const [fontsLoaded] = useFonts({
    Bungee: require('../assets/fonts/Bungee-Regular.ttf'),
    // RobotoCondensed: require('../assets/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf'),
    // RobotoCondensedBold: require('../assets/fonts/RobotoCondensed-VariableFont_wght.ttf'),
    // PlayfairDisplay: require('../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <SplashScreen />;
}

