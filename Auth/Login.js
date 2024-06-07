import { StyleSheet, Text, View, Image } from "react-native";
import COLORS from "../configs/colors";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
          />

          <Text style={styles.logoContainerText}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.borderTest,
    paddingTop: 20
  },

  logo:{
    width: 70,
    height: 70,
  },

  logoContainerText:{
    color: COLORS.primaryColor,
    fontSize: 18,
    paddingTop: 10,
    fontWeight: "bold"
  }
});

export default Login;
