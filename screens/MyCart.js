import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const MyCart = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myCart, styles.iconLayout]}>
      <View style={[styles.searchBarParent, styles.parentLayout]}>
        <View style={[styles.searchBar, styles.parentFlexBox]}>
          <View
            style={[
              styles.interfaceSearchMagnifyingParent,
              styles.buyNowWrapperFlexBox,
            ]}
          >
            <Image
              style={styles.interfaceLayout}
              contentFit="cover"
              source={require("../assets/interface--search-magnifying-glass.png")}
            />
            <Text style={[styles.search, styles.searchTypo]}>Search</Text>
            <Image
              style={styles.systemQrCode}
              contentFit="cover"
              source={require("../assets/system--qr-code.png")}
            />
          </View>
          <Image
            style={[styles.menuMoreVertical, styles.menuMoreVerticalLayout]}
            contentFit="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={styles.parentSpaceBlock}>
          <View style={styles.cartItems}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.textTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                <View style={styles.button6Parent}>
                  <Pressable
                    style={[styles.button6, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      In Stock
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button4, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("Route1")}
                  >
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Route
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.qty10Parent}>
                <Text style={[styles.qty10, styles.textClr]}>Qty: 10</Text>
                <Text style={[styles.text1, styles.textClr]}>$1,000</Text>
              </View>
              <Image
                style={[
                  styles.interfaceTrashFull,
                  styles.menuMoreVerticalLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.textTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                <View style={styles.button6Parent}>
                  <Pressable
                    style={[styles.button6, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      In Stock
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button4, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("Route1")}
                  >
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Route
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.qty10Parent}>
                <Text style={[styles.qty10, styles.textClr]}>Qty: 10</Text>
                <Text style={[styles.text1, styles.textClr]}>$1,000</Text>
              </View>
              <Image
                style={[
                  styles.interfaceTrashFull,
                  styles.menuMoreVerticalLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.textTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                <View style={styles.button6Parent}>
                  <Pressable
                    style={[styles.button6, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      In Stock
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button4, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("Route1")}
                  >
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Route
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.qty10Parent}>
                <Text style={[styles.qty10, styles.textClr]}>Qty: 10</Text>
                <Text style={[styles.text1, styles.textClr]}>$1,000</Text>
              </View>
              <Image
                style={[
                  styles.interfaceTrashFull,
                  styles.menuMoreVerticalLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.textTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                <View style={styles.button6Parent}>
                  <Pressable
                    style={[styles.button6, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      In Stock
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button4, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("Route1")}
                  >
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Route
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.qty10Parent}>
                <Text style={[styles.qty10, styles.textClr]}>Qty: 10</Text>
                <Text style={[styles.text1, styles.textClr]}>$1,000</Text>
              </View>
              <Image
                style={[
                  styles.interfaceTrashFull,
                  styles.menuMoreVerticalLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
          </View>
          <View style={styles.parentSpaceBlock}>
            <View style={[styles.rectangleParent, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.textTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                <View style={styles.button6Parent}>
                  <Pressable
                    style={[styles.button6, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      In Stock
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button4, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("Route1")}
                  >
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.searchTypo]}>
                      View Route
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.qty10Parent}>
                <Text style={[styles.qty10, styles.textClr]}>Qty: 10</Text>
                <Text style={[styles.text1, styles.textClr]}>$1,000</Text>
              </View>
              <Image
                style={[
                  styles.interfaceTrashFull,
                  styles.menuMoreVerticalLayout,
                ]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.parentSpaceBlock]}>
          <View style={styles.frameGroup}>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.tax, styles.taxTypo]}>Tax</Text>
              <Text style={[styles.text10, styles.taxTypo]}>$1,000</Text>
            </View>
            <View style={[styles.totalParent, styles.parentFlexBox]}>
              <Text style={[styles.tax, styles.taxTypo]}>Total</Text>
              <Text style={[styles.text10, styles.taxTypo]}>$1,000</Text>
            </View>
          </View>
          <Pressable
            style={[styles.buyNowWrapper, styles.buyNowWrapperFlexBox]}
            onPress={() => navigation.navigate("SelfCheckout")}
          >
            <Text style={[styles.buyNow, styles.buyNowClr]}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={styles.menuMoreVerticalLayout}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.myCart1, styles.buyNowClr]}>My Cart</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentLayout: {
    width: 340,
    justifyContent: "center",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buyNowWrapperFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchTypo: {
    fontFamily: FontFamily.bODYBODYRegular,
    textAlign: "left",
  },
  menuMoreVerticalLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  textClr: {
    color: Color.subtext,
    textAlign: "left",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  interfaceLayout: {
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  parentSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  taxTypo: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  buyNowClr: {
    color: Color.bG,
    textAlign: "left",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  search: {
    color: Color.light,
    textAlign: "left",
    fontSize: FontSize.bODYBODYLight_size,
    flex: 1,
  },
  systemQrCode: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  interfaceSearchMagnifyingParent: {
    backgroundColor: Color.bG,
    flex: 1,
  },
  menuMoreVertical: {
    marginLeft: 5,
  },
  searchBar: {
    alignSelf: "stretch",
  },
  frameChild: {
    width: 60,
    height: 60,
  },
  productName: {
    color: Color.colorBlack,
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    textAlign: "left",
  },
  brand: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.bODYBODYLight_size,
    alignSelf: "stretch",
  },
  memberType: {
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  button6: {
    backgroundColor: Color.color2,
  },
  interfaceLabel1: {
    display: "none",
  },
  button5: {
    backgroundColor: Color.greens,
    marginLeft: 5,
  },
  button4: {
    backgroundColor: Color.color,
    marginLeft: 5,
  },
  button6Parent: {
    flexDirection: "row",
  },
  productNameParent: {
    marginLeft: 17,
    flex: 1,
  },
  qty10: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.bODYBODYLight_size,
  },
  text1: {
    marginTop: 5,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.bODYBODYLight_size,
  },
  qty10Parent: {
    marginLeft: 17,
    justifyContent: "center",
  },
  interfaceTrashFull: {
    marginLeft: 17,
  },
  rectangleParent: {
    justifyContent: "center",
    width: 340,
  },
  cartItems: {
    alignSelf: "stretch",
  },
  tax: {
    color: Color.subtext,
    textAlign: "left",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
  },
  text10: {
    color: Color.subtext,
    textAlign: "left",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    marginLeft: 5,
  },
  totalParent: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  frameGroup: {
    width: 75,
    alignItems: "flex-end",
  },
  buyNow: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  buyNowWrapper: {
    height: 22,
    marginTop: 4,
    backgroundColor: Color.color2,
    alignSelf: "stretch",
  },
  frameParent: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    backgroundColor: Color.bG,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  searchBarParent: {
    top: 79,
    left: 23,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    width: 340,
  },
  myCart1: {
    fontSize: FontSize.h5H5Bold_size,
    marginLeft: 10,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.color2,
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
  myCart: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default MyCart;
