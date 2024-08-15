import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ChangeMart = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.changeMart, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.searchBarParent}>
          <View style={styles.searchBar}>
            <View
              style={[
                styles.interfaceSearchMagnifyingParent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.interfaceSearchMagnifying}
                contentFit="cover"
                source={require("../assets/interface--search-magnifying-glass.png")}
              />
              <Text style={styles.search}>Search</Text>
              <Image
                style={[styles.systemQrCode, styles.systemQrCodeLayout]}
                contentFit="cover"
                source={require("../assets/system--qr-code.png")}
              />
            </View>
            <Image
              style={[
                styles.menuMoreVertical,
                styles.menuMoreVerticalSpaceBlock,
              ]}
              contentFit="cover"
              source={require("../assets/menu--more-vertical.png")}
            />
          </View>
          <Text style={[styles.or, styles.orClr]}>or</Text>
          <View style={styles.scanMartQrCodeWrapper}>
            <Text style={[styles.scanMartQr, styles.martTypo]}>
              Scan Mart QR Code
            </Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={[styles.viewCartParent, styles.parentFlexBox]}>
          <Text style={[styles.viewCart, styles.viewCartClr]}>Continue</Text>
          <Image
            style={[
              styles.interfaceShoppingCart02,
              styles.menuMoreVerticalSpaceBlock,
            ]}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-023.png")}
          />
        </View>
      </View>
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
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={[styles.arrowChevronLeft, styles.menuMoreVerticalLayout]}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.changeMart1, styles.viewCartClr]}>
          Change Mart
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
  parentFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  systemQrCodeLayout: {
    display: "none",
    height: 16,
    width: 16,
  },
  menuMoreVerticalSpaceBlock: {
    marginLeft: 5,
    overflow: "hidden",
  },
  orClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  martTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  viewCartClr: {
    color: Color.bG,
    textAlign: "left",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  menuMoreVerticalLayout: {
    height: 24,
    width: 24,
  },
  interfaceSearchMagnifying: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  search: {
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.light,
    textAlign: "left",
    fontSize: FontSize.bODYBODYLight_size,
    flex: 1,
  },
  systemQrCode: {
    overflow: "hidden",
  },
  interfaceSearchMagnifyingParent: {
    backgroundColor: Color.bG,
    flex: 1,
  },
  menuMoreVertical: {
    height: 24,
    width: 24,
  },
  searchBar: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  or: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    fontSize: FontSize.h5H5Bold_size,
  },
  scanMartQr: {
    fontSize: FontSize.h4H4Bold_size,
    color: Color.colorBlack,
    textAlign: "left",
  },
  scanMartQrCodeWrapper: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 324,
    marginTop: 18,
    alignSelf: "stretch",
  },
  viewCart: {
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontSize: FontSize.bODYBODYLight_size,
    color: Color.bG,
  },
  interfaceShoppingCart02: {
    display: "none",
    height: 16,
    width: 16,
  },
  viewCartParent: {
    height: 29,
    backgroundColor: Color.color2,
    marginTop: 18,
  },
  frameParent: {
    top: 119,
    left: 37,
    width: 317,
    alignItems: "center",
    position: "absolute",
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
  },
  arrowChevronLeft: {
    overflow: "hidden",
  },
  changeMart1: {
    marginLeft: 10,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.h5H5Bold_size,
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.color2,
  },
  changeMart: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default ChangeMart;
