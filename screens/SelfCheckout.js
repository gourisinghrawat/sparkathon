import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SelfCheckout = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.selfCheckout, styles.iconLayout]}>
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
      <View style={styles.scanTheQrToCheckoutParent}>
        <Text style={styles.scanTheQr}>Scan the QR to checkout</Text>
        <Image
          style={[styles.image1Icon, styles.image1IconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.frameParent, styles.image1IconSpaceBlock]}>
          <View style={styles.frameGroup}>
            <View style={[styles.taxParent, styles.parentFlexBox1]}>
              <Text style={[styles.tax, styles.taxTypo]}>Tax</Text>
              <Text style={[styles.text, styles.taxTypo]}>$1,000</Text>
            </View>
            <View style={[styles.totalParent, styles.parentFlexBox1]}>
              <Text style={[styles.tax, styles.taxTypo]}>Total</Text>
              <Text style={[styles.text, styles.taxTypo]}>$1,000</Text>
            </View>
          </View>
          <View style={[styles.viewCartParent, styles.parentFlexBox]}>
            <Text style={[styles.viewCart, styles.viewCartClr]}>Get Bill</Text>
            <Image
              style={styles.interfaceShoppingCart021}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-026.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.parentFlexBox]}>
        <Image
          style={styles.arrowChevronLeft}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.selfCheckout1, styles.viewCartClr]}>
          Self Checkout
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
    position: "absolute",
  },
  image1IconSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  parentFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  taxTypo: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  parentFlexBox: {
    backgroundColor: Color.color2,
    alignItems: "center",
    flexDirection: "row",
  },
  viewCartClr: {
    color: Color.bG,
    textAlign: "left",
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
    flexDirection: "row",
  },
  scanTheQr: {
    textAlign: "left",
    color: Color.subtext,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.h5H5Bold_size,
  },
  image1Icon: {
    maxWidth: "100%",
    height: 273,
    overflow: "hidden",
    width: "100%",
  },
  tax: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.subtext,
  },
  text: {
    marginLeft: 5,
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.subtext,
  },
  taxParent: {
    alignItems: "center",
  },
  totalParent: {
    marginTop: 5,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroup: {
    width: 75,
    alignItems: "flex-end",
  },
  viewCart: {
    fontSize: FontSize.bODYBODYLight_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  interfaceShoppingCart021: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 5,
    overflow: "hidden",
  },
  viewCartParent: {
    borderRadius: Border.br_11xl,
    height: 26,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginTop: 4,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
  },
  scanTheQrToCheckoutParent: {
    top: 209,
    left: 23,
    width: 340,
    justifyContent: "center",
    position: "absolute",
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  selfCheckout1: {
    marginLeft: 10,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.h5H5Bold_size,
    color: Color.bG,
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    position: "absolute",
  },
  selfCheckout: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default SelfCheckout;
