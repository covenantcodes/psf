
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Onboard from "../Onboard/Onboard";
import Home from "../Home"
import Profile from "../Profile";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}}/> */}
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
};

export default AppNavigator;
