import { StyleSheet, Text, View } from "react-native";
import COLORS from "../configs/colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    color: COLORS.primary,
  },
});

export default Login;
