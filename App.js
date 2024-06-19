import RootNavigator from "./Navigator/RootNavigator";
import {useFonts} from "expo-font";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments, faBell} from "@fortawesome/free-regular-svg-icons";


library.add( faBell, faComments)

const App = () => {

   // FONTS
   const [fontsLoaded] = useFonts({
    // POPPINS
    PoppinsThin: require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
    PoppinsThinItaltic: require("./assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("./assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigator />;
};

export default App;
