import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
        <Text onPress={()=> navigation.navigate("AuthNavigator", {screen: 'Login'})}>Profile</Text>
    </View>
  )
}

export default Profile
