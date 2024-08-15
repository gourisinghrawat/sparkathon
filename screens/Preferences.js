import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Preferences = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.preferences, styles.iconLayout]}>
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
      <View style={styles.frameParent}>
        <View style={[styles.categoriesParent, styles.parentFlexBox]}>
          <Text style={[styles.categories, styles.categoriesTypo]}>
            Categories
          </Text>
          <Image
            style={styles.editAddPlus}
            contentFit="cover"
            source={require("../assets/edit--add-plus.png")}
          />
        </View>
        <View style={styles.categoriseParent}>
          <View style={styles.categorise}>
            <View style={[styles.ediblesParent, styles.parentFlexBox]}>
              <Text style={styles.edibles}>Edibles</Text>
              <Image
                style={styles.editEditPencil01}
                contentFit="cover"
                source={require("../assets/edit--edit-pencil-01.png")}
              />
            </View>
            <View style={styles.veganParent}>
              <Text style={styles.veganTypo}>Vegan</Text>
              <Text style={[styles.glutenFree, styles.veganTypo]}>
                Gluten free
              </Text>
            </View>
          </View>
          <View style={styles.categorise1}>
            <View style={[styles.ediblesParent, styles.parentFlexBox]}>
              <Text style={styles.edibles}>Edibles</Text>
              <Image
                style={styles.editEditPencil01}
                contentFit="cover"
                source={require("../assets/edit--edit-pencil-01.png")}
              />
            </View>
            <View style={styles.veganParent}>
              <Text style={styles.veganTypo}>Vegan</Text>
              <Text style={[styles.glutenFree, styles.veganTypo]}>
                Gluten free
              </Text>
            </View>
          </View>
          <View style={styles.categorise1}>
            <View style={[styles.ediblesParent, styles.parentFlexBox]}>
              <Text style={styles.edibles}>Edibles</Text>
              <Image
                style={styles.editEditPencil01}
                contentFit="cover"
                source={require("../assets/edit--edit-pencil-01.png")}
              />
            </View>
            <View style={styles.veganParent}>
              <Text style={styles.veganTypo}>Vegan</Text>
              <Text style={[styles.glutenFree, styles.veganTypo]}>
                Gluten free
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={styles.editAddPlus}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.preferences1, styles.categoriesTypo]}>
          Preferences
        </Text>
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
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  categoriesTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  veganTypo: {
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.bODYBODYLight_size,
    textAlign: "left",
    color: Color.subtext,
    alignSelf: "stretch",
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
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
  },
  categories: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.subtext,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  editAddPlus: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  categoriesParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  edibles: {
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontSize: FontSize.bODYBODYLight_size,
    textAlign: "left",
    color: Color.subtext,
  },
  editEditPencil01: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  ediblesParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  glutenFree: {
    marginTop: 2,
  },
  veganParent: {
    width: 49,
    marginTop: 5,
  },
  categorise: {
    alignSelf: "stretch",
  },
  categorise1: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  categoriseParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 80,
    left: 23,
    width: 340,
    position: "absolute",
  },
  preferences1: {
    fontSize: FontSize.h5H5Bold_size,
    color: Color.bG,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  arrowChevronLeftParent: {
    top: 0,
    backgroundColor: Color.color2,
    height: 55,
    paddingHorizontal: Padding.p_mini,
  },
  preferences: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Preferences;
