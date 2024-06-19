import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator initialRouteName="Login">
      <Auth.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
