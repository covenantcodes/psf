import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView
} from "react-native";
import { useState } from "react";
import COLORS from "../configs/colors";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [centre, setCentre] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [parent, setParent] = useState(""); 
  const [conference, setConference] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const centres = ["Centre 1", "Centre 2", "Centre 3"];
  const conferences = ["Conference 1", "Conference 2", "Conference 3"];

  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);
  const [isParentFocused, setIsParentFocused] = useState(false);
  const [isCentreFocused, setIsCentreFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isConferenceFocused, setIsConferenceFocused] = useState(false);  

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleModal = (type) => {
    setModalType(type);
    setModalVisible(!modalVisible);
  };

  const handleSelection = (selectedItem) => {
    if (modalType === "Centre") {
      setCentre(selectedItem);
    } else if (modalType === "Conference") {
      setConference(selectedItem);
    }
    setModalVisible(false);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.introTextContainer}>
        <Text style={styles.introTextOne}>Let's Sign you up</Text>
        <Text style={styles.introTextTwo}>Welcome!</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Full Name"
            style={[styles.textInput, isFullNameFocused && styles.inputFocused]}
            onFocus={() => setIsFullNameFocused(true)}
            onBlur={() => setIsFullNameFocused(false)}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
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
            placeholder="Age"
            style={[styles.textInput, isAgeFocused && styles.inputFocused]}
            onFocus={() => setIsAgeFocused(true)}
            onBlur={() => setIsAgeFocused(false)}
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Parent's Name"
            style={[styles.textInput, isParentFocused && styles.inputFocused]}
            onFocus={() => setIsParentFocused(true)}
            onBlur={() => setIsParentFocused(false)}
            value={parent}
            onChangeText={setParent}
          />
        </View>

        
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Conference"
            style={[styles.textInput, isConferenceFocused && styles.inputFocused]}
            onFocus={() => setIsConferenceFocused(true)}
            onBlur={() => setIsConferenceFocused(false)}
            value={conference}
            onChangeText={setConference}
          />
          <TouchableOpacity style={styles.sideIconContainer} onPress={() => toggleModal("Conference")}>
            <MaterialCommunityIcons
              name={"chevron-down"}
              size={24}
              color={COLORS.grey}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Centre"
            style={[styles.textInput, isCentreFocused && styles.inputFocused]}
            onFocus={() => setIsCentreFocused(true)}
            onBlur={() => setIsCentreFocused(false)}
            value={centre}
            onChangeText={setCentre}
          />
          <TouchableOpacity style={styles.sideIconContainer} onPress={() => toggleModal("Centre")}>
            <MaterialCommunityIcons
              name={"chevron-down"}
              size={24}
              color={COLORS.grey}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
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

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={[styles.textInput, isConfirmPasswordFocused && styles.inputFocused]}
            onFocus={() => setIsConfirmPasswordFocused(true)}
            onBlur={() => setIsConfirmPasswordFocused(false)}
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

        <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
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
          <Text style={styles.otherCTAText}>Already have an account?</Text>
          <TouchableOpacity style={styles.mainCTA} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.mainCTAText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select {modalType}</Text>
            <FlatList
              data={modalType === "Centre" ? centres : conferences}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => handleSelection(item)}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
     
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
  sideIconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 10,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.primaryColor,
    borderRadius: 10,
  },
  modalCloseButtonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
  },
});

export default Login;
