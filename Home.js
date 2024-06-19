import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import COLORS from "./configs/colors";
import { Fontisto, MaterialCommunityIcons } from "react-native-vector-icons";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText =
    "If the shoemaker of the furniture doesn't meet up to the ideas of the man of war then there will be a battle between the bride and her tailor because she doesn't know how to cook the husband's meal to taste like the bunker in his boarding house compared to the burger in Wimpy's";
  const expandableText = isExpanded
    ? fullText
    : `${fullText.substring(0, 100)}...`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={require("./assets/avatar.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={styles.avatarContainer}>
          <Image source={require("./assets/logo.png")} style={styles.avatar} />
        </View>

        <TouchableOpacity>
          <Fontisto name="bell" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postBox}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <View style={styles.postAvatar}>
                <Image
                  style={styles.avatar}
                  source={require("./assets/profile.jpg")}
                />
              </View>

              <View style={styles.postHeaderText}>
                <Text style={styles.postName}>Adebayo Emmanuel</Text>
                <Text style={styles.postDuration}>5h Ago</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.menuContainer}>
              <MaterialCommunityIcons name="dots-vertical" size={27} />
            </TouchableOpacity>
          </View>

          <View style={styles.postContent}>
            <View style={styles.postContentTextContainer}>
              <Text style={styles.postContentText}>{expandableText}</Text>
              <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                <Text style={styles.postContentMore}>
                  {isExpanded ? "Less" : "More"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.postContentPicture}>
              
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },

  headerContainer: {
    borderColor: COLORS.borderTest,
    borderColor: COLORS.grey,
    borderWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },

  avatarContainer: {
    height: 50,
    width: 50,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  postContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 12,
  },

  postBox: {
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    padding: 10,
    borderRadius: 10,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  postName: {
    fontFamily: "PoppinsSemiBold",
    marginLeft: 10,
  },
  postDuration: {
    fontFamily: "PoppinsRegular",
    fontSize: 10,
    color: COLORS.grey,
    marginLeft: 10,
  },

  postContentTextContainer: {
    paddingVertical: 5,
  },

  postContentText: {
    fontFamily: "PoppinsRegular",
    textAlign: "justify",
  },

  postContentMore: {
    color: COLORS.primaryColor,
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
  },
});

export default Home;
