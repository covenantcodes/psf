import { NavigationContainer } from "@react-navigation/native";
4;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const Root = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="BottomTabNavigator">
        <Root.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />

        <Root.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
