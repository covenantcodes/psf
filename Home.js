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
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const fullText =
    "If the shoemaker of the furniture doesn't meet up to the ideas of the man of war then there will be a battle between the bride and her tailor because she doesn't know how to cook the husband's meal to taste like the bunker in his boarding house compared to the burger in Wimpy's";
  const expandableText = isExpanded
    ? fullText
    : `${fullText.substring(0, 100)}...`;

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

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
          <FontAwesomeIcon icon="fa-regular fa-bell" size={25} />
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
              {/* <MaterialCommunityIcons name="dots-vertical" size={27} /> */}
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
            <View style={styles.postPictureContainer}>
              <View style={styles.postPictureContainerRow}>
                <Image
                  style={styles.postPicture}
                  source={require("./assets/post1.jpg")}
                />

                <Image
                  style={styles.postPicture}
                  source={require("./assets/post2.jpg")}
                />
              </View>

              <View style={styles.postPictureContainerRow}>
                <Image
                  style={styles.postPicture}
                  source={require("./assets/post3.jpg")}
                />

                <Image
                  style={styles.postPicture}
                  source={require("./assets/post4.jpeg")}
                />
              </View>
            </View>
          </View>

          <View style={styles.postActionBox}>
            <View style={styles.postActionLeft}>
              <View style={styles.postAction}>
                <TouchableOpacity onPress={toggleLike}>
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    size={25}
                    color={liked ? "#403C9A" : "#403C9A"}
                  />
                </TouchableOpacity>
                <Text style={styles.postActionText}>2356</Text>
              </View>

              <View style={styles.postAction}>
                <TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesomeIcon
                      icon="fa-regular fa-comments"
                      size={25}
                      color="#403C9A"
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.postActionText}>223</Text>
              </View>
            </View>

            <View style={styles.postActionRight}>
              <View style={styles.postAction}>
                <TouchableOpacity onPress={toggleLike}>
                  <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    size={25}
                    color={liked ? "#403C9A" : "#403C9A"}
                  />
                </TouchableOpacity>
              </View>
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
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  headerContainer: {
    borderColor: COLORS.borderTest,
    borderColor: COLORS.grey,
    // borderWidth: 1,
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
    // borderWidth: 1,
    borderColor: "red",
    padding: 13,
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

  postPictureContainer: {},

  postPictureContainerRow: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },

  postPicture: {
    borderWidth: 1,
    borderColor: "white",
    width: "50%",
    height: 150,
    borderRadius: 10,
  },

  postActionBox: {
    borderColor: "red",
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },

  postActionLeft:{
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    width: "31%",
  },


  postAction: {
    flexDirection: "row",
    alignItems: "center",
  },

  postActionText: {
    marginLeft: 2.5,
    marginTop: 2.5,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    padding: 4,
    color: COLORS.primaryColor,
  },
});

export default Home;
