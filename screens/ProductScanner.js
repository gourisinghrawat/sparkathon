import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const ProductScanner = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.productScanner, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameGroupFlexBox}>
            <Image
              style={styles.arrowCaretDownMd}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
            <View style={styles.walmartParent}>
              <Text style={[styles.walmart, styles.walmartTypo]}>Walmart</Text>
              <Text style={styles.mallRoadLudhiana}>Mall road, Ludhiana</Text>
            </View>
          </View>
          <Pressable
            style={[styles.viewCartParent, styles.button2FlexBox]}
            onPress={() => navigation.navigate("ChangeMart")}
          >
            <Text style={styles.viewCart}>Change Mart</Text>
            <Image
              style={[styles.interfaceShoppingCart02, styles.interfaceLayout]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-024.png")}
            />
          </Pressable>
        </View>
        <View style={styles.searchForProductWrapper}>
          <Text style={[styles.searchForProduct, styles.walmartTypo]}>
            Search for product
          </Text>
        </View>
        <Pressable
          style={[styles.button2, styles.button2FlexBox]}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Text style={styles.viewCart}>View Cart</Text>
          <Image
            style={styles.interfaceLayout}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-02.png")}
          />
        </Pressable>
        <View style={styles.frameChild} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ProductDetails")}
        >
          <Text style={[styles.viewCart2, styles.viewCart2Typo]}>
            View Product
          </Text>
          <Image
            style={styles.interfaceShoppingCart022}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-025.png")}
          />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Text style={[styles.viewCart2, styles.viewCart2Typo]}>
            Add To Cart
          </Text>
          <Image
            style={styles.interfaceShoppingCart022}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-025.png")}
          />
        </Pressable>
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
          style={styles.arrowChevronLeft}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.scanProduct, styles.viewCart2Typo]}>
          Scan Product
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
  frameGroupFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  walmartTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  button2FlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    backgroundColor: Color.color2,
    flexDirection: "row",
    alignItems: "center",
  },
  interfaceLayout: {
    marginLeft: 5,
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  viewCart2Typo: {
    fontSize: FontSize.h5H5Bold_size,
    color: Color.bG,
    textAlign: "left",
  },
  navigationPosition: {
    width: 390,
    left: 0,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  arrowCaretDownMd: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  walmart: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
  },
  mallRoadLudhiana: {
    color: Color.light,
    marginTop: 2,
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.bODYBODYLight_size,
    textAlign: "left",
  },
  walmartParent: {
    width: 87,
  },
  viewCart: {
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    color: Color.bG,
    fontSize: FontSize.bODYBODYLight_size,
    textAlign: "left",
  },
  interfaceShoppingCart02: {
    display: "none",
  },
  viewCartParent: {
    alignSelf: "stretch",
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  searchForProduct: {
    fontSize: FontSize.h4H4Bold_size,
  },
  searchForProductWrapper: {
    padding: Padding.p_3xs,
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    height: 26,
    marginTop: 10,
  },
  frameChild: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 324,
    marginTop: 10,
    alignSelf: "stretch",
  },
  viewCart2: {
    fontFamily: FontFamily.bODYBODYRegular,
  },
  interfaceShoppingCart022: {
    width: 20,
    height: 20,
    marginLeft: 10,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: Color.color2,
    borderRadius: Border.br_11xl,
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  scanProduct: {
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
    width: 390,
    left: 0,
  },
  productScanner: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default ProductScanner;
