import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import COLORS from "../configs/colors";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.introTextContainer}>
        <Text style={styles.introTextOne}>Let's Sign you in</Text>
        <Text style={styles.introTextTwo}>We've missed you!</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Email"
            style={[styles.textInput, isEmailFocused && styles.inputFocused]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.textInputContainer}>
        <TextInput
            placeholder="Password"
            style={[styles.textInput, isPasswordFocused && styles.inputFocused]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={COLORS.grey}
            style={styles.passwordIcon}
            onPress={togglePassword}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate("Home")}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.orLineBox}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLineBox}></View>
        </View>

        <View style={styles.otherSignContainer}>
          <TouchableOpacity style={styles.googleContainer}>
            <Image
              source={require("../assets/google.png")}
              style={styles.otherImage}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleContainer}>
            <Image
              source={require("../assets/apple.png")}
              style={styles.otherImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.otherCTA}>
          <Text style={styles.otherCTAText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.mainCTA}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.mainCTAText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 40,
  },
  logo: {
    width: 70,
    height: 70,
  },

  introTextContainer: {
    marginTop: 15,
  },

  introTextOne: {
    fontSize: 30,
    fontFamily: "PoppinsSemiBold",
  },
  introTextTwo: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    color: COLORS.grey,
  },
  formContainer: {
    marginVertical: 30,
  },
  textInputContainer: {
    marginVertical: 10,
    flexDirection: "row",
  },
  textInput: {
    width: "100%",
    fontFamily: "PoppinsRegular",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightgrey,
  },
  inputFocused: {
    borderBottomColor: COLORS.primaryColor,
  },
  passwordIcon: {
    alignSelf: "center",
    marginLeft: -30,
  },
  forgotPasswordText: {
    textAlign: "right",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
    color: COLORS.primaryColor,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: COLORS.primaryColor,
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  loginButtonText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    textAlign: "center",
    color: COLORS.white,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  orLineBox: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightgrey,
    marginHorizontal: 6,
  },

  orText: {
    fontSize: 22,
    color: COLORS.grey,
  },

  otherSignContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  googleContainer: {
    borderRadius: 5,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 12,
  },

  otherImage: {
    width: 40,
    height: 40,
  },

  otherCTA: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  otherCTAText: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
  },

  mainCTA: {
    marginLeft: 5,
  },

  mainCTAText: {
    color: COLORS.primaryColor,
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
  },
});

export default Login;
