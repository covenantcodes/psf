import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Home";
import ProfileScreen from '../Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
    <Tab.Navigator
         initialRouteName='Home'
         screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;