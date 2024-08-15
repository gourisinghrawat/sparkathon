import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.parentFlexBox1]}>
          <View style={styles.parentFlexBox1}>
            <Image
              style={styles.interfaceLayout1}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
            <View style={styles.walmartParent}>
              <Text style={[styles.walmart, styles.offersTypo]}>Walmart</Text>
              <Text style={[styles.mallRoadLudhiana, styles.searchTypo]}>
                Mall road, Ludhiana
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.viewCartParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("ChangeMart")}
          >
            <Text style={[styles.viewCart, styles.viewCartTypo]}>
              Change Mart
            </Text>
            <Image
              style={[styles.interfaceShoppingCart02, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-024.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.searchBar, styles.parentFlexBox1]}>
          <View
            style={[
              styles.interfaceSearchMagnifyingParent,
              styles.parentFlexBox,
            ]}
          >
            <Image
              style={styles.interfaceLayout}
              contentFit="cover"
              source={require("../assets/interface--search-magnifying-glass.png")}
            />
            <Text style={[styles.search, styles.searchTypo]}>Search</Text>
            <Image
              style={styles.interfaceLayout1}
              contentFit="cover"
              source={require("../assets/system--qr-code.png")}
            />
          </View>
          <Image
            style={styles.menuMoreVertical}
            contentFit="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={[styles.instanceParent, styles.parentFlexBox1]}>
          <View style={[styles.viewCartParent, styles.parentFlexBox]}>
            <Text style={[styles.viewCart, styles.viewCartTypo]}>My List</Text>
            <Image
              style={[styles.interfaceShoppingCart02, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </View>
          <Pressable
            style={[styles.button2, styles.parentFlexBox]}
            onPress={() => navigation.navigate("MyCart")}
          >
            <Text style={[styles.viewCart, styles.viewCartTypo]}>
              View Cart
            </Text>
            <Image
              style={[styles.interfaceShoppingCart022, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.offersParent}>
            <Text style={[styles.offers, styles.offersTypo]}>Offers</Text>
            <View style={[styles.suggestionsParent, styles.parentFlexBox1]}>
              <Pressable onPress={() => navigation.navigate("ProductDetails")}>
                <Image
                  style={styles.childLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.childLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.childLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.childLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.childLayout}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                  <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.rectangleParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53294.png")}
              />
              <View style={styles.offer20OffParent}>
                <Text style={[styles.offer20Off, styles.home1Typo]}>
                  Offer 20% off
                </Text>
                <Text style={[styles.loremIpsum, styles.viewCartTypo]}>
                  Lorem Ipsum
                </Text>
              </View>
            </View>
            <View style={styles.preview}>
              <Image
                style={[styles.previewChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent2}>
                <Text style={[styles.walmart, styles.offersTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.brand5, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text5, styles.textFlexBox]}>$100.00</Text>
                <View style={styles.button3Parent}>
                  <Pressable
                    style={[styles.button3, styles.buttonFlexBox]}
                    onPress={() => navigation.navigate("ProductDetails")}
                  >
                    <Image
                      style={styles.interfaceLayout}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.textTypo]}>
                      View Product
                    </Text>
                  </Pressable>
                  <View style={[styles.button4, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.textTypo]}>
                      Offers
                    </Text>
                  </View>
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={[styles.memberType, styles.textTypo]}>
                      In Stock
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <Text style={[styles.offers, styles.offersTypo]}>New ins</Text>
          <View style={[styles.suggestionsParent, styles.parentFlexBox1]}>
            <Pressable onPress={() => navigation.navigate("ProductDetails")}>
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <Text style={[styles.offers, styles.offersTypo]}>Try these</Text>
          <View style={[styles.suggestionsParent, styles.parentFlexBox1]}>
            <Pressable onPress={() => navigation.navigate("ProductDetails")}>
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.suggestions1}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/rectangle-53291.png")}
              />
              <View style={styles.productNameParent}>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
                <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/navigation--house-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MapOfTheMart")}
        >
          <Image
            style={[styles.icon, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/navigation--map.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("ProductScanner")}
        >
          <Image
            style={[styles.icon, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/system--qr-code1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Image
            style={[styles.icon, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-021.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/user--user-02.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.homeWrapper, styles.navigationPosition]}>
        <Text style={styles.home1Typo}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  offersTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
  },
  searchTypo: {
    color: Color.light,
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.bODYBODYLight_size,
    textAlign: "left",
  },
  parentFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
  },
  viewCartTypo: {
    color: Color.bG,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  interfaceLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  textFlexBox: {
    color: Color.subtext,
    textAlign: "left",
    alignSelf: "stretch",
  },
  home1Typo: {
    fontSize: FontSize.h5H5Bold_size,
    color: Color.bG,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  childLayout: {
    height: 60,
    width: 60,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.sMALLBold_size,
  },
  interfaceLayout: {
    height: 12,
    width: 12,
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
  walmart: {
    textAlign: "left",
  },
  mallRoadLudhiana: {
    marginTop: 2,
  },
  walmartParent: {
    width: 87,
  },
  viewCart: {
    fontSize: FontSize.bODYBODYLight_size,
  },
  interfaceShoppingCart02: {
    marginLeft: 5,
    display: "none",
  },
  viewCartParent: {
    backgroundColor: Color.color2,
    alignSelf: "stretch",
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  search: {
    flex: 1,
  },
  interfaceSearchMagnifyingParent: {
    backgroundColor: Color.bG,
    flex: 1,
  },
  menuMoreVertical: {
    width: 24,
    height: 24,
    marginLeft: 5,
    overflow: "hidden",
  },
  searchBar: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  interfaceShoppingCart022: {
    marginLeft: 5,
  },
  button2: {
    marginLeft: 5,
    backgroundColor: Color.color2,
    alignSelf: "stretch",
  },
  instanceParent: {
    marginTop: 10,
  },
  offers: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  productName: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  brand: {
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    color: Color.subtext,
  },
  text: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
  },
  productNameParent: {
    marginTop: 5,
  },
  suggestions1: {
    marginLeft: 8,
  },
  suggestionsParent: {
    flexWrap: "wrap",
    marginTop: 8,
    alignSelf: "stretch",
  },
  offersParent: {
    alignSelf: "stretch",
  },
  frameChild: {
    left: 0,
    top: 0,
    height: 137,
    width: 343,
    position: "absolute",
  },
  offer20Off: {
    alignSelf: "stretch",
  },
  loremIpsum: {
    marginTop: 4,
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.bG,
    alignSelf: "stretch",
  },
  offer20OffParent: {
    top: 89,
    left: 13,
    width: 96,
    position: "absolute",
  },
  rectangleParent: {
    height: 137,
    alignSelf: "stretch",
  },
  previewChild: {
    display: "none",
  },
  brand5: {
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    color: Color.subtext,
    fontSize: FontSize.sMALLBold_size,
  },
  text5: {
    fontSize: FontSize.bODYBODYLight_size,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    color: Color.subtext,
  },
  memberType: {
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  button3: {
    backgroundColor: Color.color2,
  },
  interfaceLabel1: {
    display: "none",
  },
  button4: {
    marginLeft: 5,
    backgroundColor: Color.color2,
  },
  button5: {
    backgroundColor: Color.greens,
    marginLeft: 5,
  },
  button3Parent: {
    flexDirection: "row",
  },
  productNameParent2: {
    marginLeft: 17,
    alignSelf: "stretch",
    flex: 1,
  },
  preview: {
    width: 340,
    marginTop: 2,
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  frameContainer: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 77,
    left: 23,
    alignItems: "flex-end",
    width: 343,
    position: "absolute",
    overflow: "hidden",
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
  homeWrapper: {
    height: 55,
    paddingHorizontal: Padding.p_mini,
    top: 0,
    paddingVertical: Padding.p_3xs,
    width: 390,
    backgroundColor: Color.color2,
  },
  home: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;
