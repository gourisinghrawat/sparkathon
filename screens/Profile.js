import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.iconLayout]}>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/navigation--house-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MapOfTheMart")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/navigation--map.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("ProductScanner")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system--qr-code1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-021.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user--user-02.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.profileInner, styles.profileInnerLayout]}>
        <View style={styles.frameParent}>
          <View style={[styles.rectangleParent, styles.profileInnerLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/rectangle-53293.png")}
            />
            <View style={styles.nameParent}>
              <Text style={[styles.name, styles.nameTypo]}>Name</Text>
              <Text style={[styles.username, styles.usernameClr]}>
                Username
              </Text>
              <Text style={[styles.username, styles.usernameClr]}>Email</Text>
              <View style={[styles.button3, styles.button3FlexBox]}>
                <Image
                  style={styles.interfaceLabel}
                  contentFit="cover"
                  source={require("../assets/interface--label2.png")}
                />
                <Text style={styles.memberType}>Member type</Text>
              </View>
            </View>
            <Image
              style={styles.editEditPencil01}
              contentFit="cover"
              source={require("../assets/edit--edit-pencil-01.png")}
            />
          </View>
          <Pressable
            style={styles.card2}
            onPress={() => navigation.navigate("Preferences")}
          >
            <Text style={[styles.membership, styles.usernameClr]}>
              Preferences
            </Text>
          </Pressable>
          <View style={styles.card2}>
            <Text style={[styles.membership, styles.usernameClr]}>
              Membership
            </Text>
          </View>
          <Pressable
            style={styles.card2}
            onPress={() => navigation.navigate("AllLists")}
          >
            <Text style={[styles.membership, styles.usernameClr]}>My List</Text>
          </Pressable>
          <View style={styles.card2}>
            <Text style={[styles.membership, styles.usernameClr]}>Marts</Text>
          </View>
          <View style={styles.card2}>
            <Text style={[styles.membership, styles.usernameClr]}>
              Payments
            </Text>
          </View>
          <View style={styles.card2}>
            <Text style={[styles.membership, styles.usernameClr]}>
              Settings
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.button3FlexBox]}>
        <Image
          style={styles.arrowChevronLeft}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.myProfile, styles.nameTypo]}>My Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    position: "absolute",
  },
  profileInnerLayout: {
    width: 340,
    alignItems: "center",
  },
  nameTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    textAlign: "left",
  },
  usernameClr: {
    color: Color.subtext,
    textAlign: "left",
  },
  button3FlexBox: {
    backgroundColor: Color.color2,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  navigationHouse01: {
    width: 35,
    height: 35,
  },
  navigation: {
    top: 789,
    backgroundColor: Color.color1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    width: 390,
    left: 0,
  },
  frameChild: {
    borderRadius: 200,
    width: 60,
    height: 60,
  },
  name: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    textAlign: "left",
  },
  username: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  interfaceLabel: {
    width: 12,
    height: 12,
    display: "none",
    overflow: "hidden",
  },
  memberType: {
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  button3: {
    borderRadius: Border.br_11xs,
    height: 13,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
  },
  nameParent: {
    marginLeft: 17,
    flex: 1,
  },
  editEditPencil01: {
    width: 16,
    height: 16,
    marginLeft: 17,
    overflow: "hidden",
  },
  rectangleParent: {
    justifyContent: "center",
    flexDirection: "row",
    width: 340,
  },
  membership: {
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
  },
  card2: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  profileInner: {
    top: 79,
    left: 23,
    width: 340,
    position: "absolute",
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  myProfile: {
    fontSize: FontSize.h5H5Bold_size,
    color: Color.bG,
    marginLeft: 10,
    textAlign: "left",
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.color2,
  },
  profile: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Profile;
