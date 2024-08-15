import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const ProductDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.productDetails, styles.iconLayout]}>
      <View style={styles.button2Parent}>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Text style={[styles.viewCart, styles.cartClr]}>View Cart</Text>
          <Image
            style={[styles.interfaceShoppingCart02, styles.systemQrCodeLayout]}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-02.png")}
          />
        </Pressable>
        <View style={[styles.searchBar, styles.searchBarSpaceBlock]}>
          <View style={styles.interfaceSearchMagnifyingParent}>
            <Image
              style={styles.interfaceLayout}
              contentFit="cover"
              source={require("../assets/interface--search-magnifying-glass.png")}
            />
            <Text style={styles.search}>Search</Text>
            <Image
              style={styles.systemQrCodeLayout}
              contentFit="cover"
              source={require("../assets/system--qr-code.png")}
            />
          </View>
          <Image
            style={[styles.menuMoreVertical, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={styles.searchBarSpaceBlock}>
          <View style={styles.preview}>
            <Image
              style={styles.previewChild}
              contentFit="cover"
              source={require("../assets/rectangle-53291.png")}
            />
            <View style={styles.productNameParent}>
              <Text style={[styles.productName, styles.productClr]}>
                Product Name
              </Text>
              <Text style={[styles.brand, styles.textClr]}>Brand</Text>
              <Text style={[styles.text, styles.textClr]}>$100.00</Text>
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
                  <Text style={styles.memberType}>View Product</Text>
                </Pressable>
                <View style={[styles.button4, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.interfaceLabel1, styles.interfaceLayout]}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.memberType}>Offers</Text>
                </View>
                <View style={[styles.button5, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.interfaceLabel1, styles.interfaceLayout]}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.memberType}>In Stock</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <View style={styles.dateParentBorder}>
                <Text style={[styles.manufacturingDate, styles.textClr]}>
                  Manufacturing date
                </Text>
                <Text style={[styles.july2024, styles.textClr]}>
                  27 july 2024
                </Text>
              </View>
              <View style={[styles.expireDateParent, styles.dateParentBorder]}>
                <Text style={[styles.manufacturingDate, styles.textClr]}>
                  Expire Date
                </Text>
                <Text style={[styles.july2024, styles.textClr]}>
                  27 july 2025
                </Text>
              </View>
            </View>
            <View style={styles.descriptionParent}>
              <Text style={[styles.description, styles.textClr]}>
                Description
              </Text>
              <View style={styles.itemNoParent}>
                <Text style={[styles.manufacturingDate, styles.textClr]}>
                  Item no.
                </Text>
                <Text style={[styles.xxxXx3, styles.textClr]}>1xxx-xx3</Text>
              </View>
              <Text style={[styles.loremIpsumDolor, styles.brand1Typo]}>
                Lorem ipsum dolor sit amet consectetur. Id bibendum elit gravida
                egestas nulla faucibus id rhoncus quam. Tellus morbi
                pellentesque ultricies tincidunt sapien enim purus id a. Ornare
                varius enim adipiscing aliquet. Porttitor in posuere et risus
                volutpat dolor nisi.
              </Text>
              <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
                <View style={styles.frameView}>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>-</Text>
                  </View>
                  <Text style={[styles.text1, styles.textTypo]}>1</Text>
                  <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.text1, styles.textTypo]}>+</Text>
                  </View>
                </View>
                <View style={[styles.addToCartParent, styles.button41FlexBox]}>
                  <Text style={[styles.addToCart, styles.cartClr]}>
                    Add to cart
                  </Text>
                  <Image
                    style={[
                      styles.interfaceShoppingCart021,
                      styles.interfaceLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/interface--shopping-cart-022.png")}
                  />
                </View>
                <View style={[styles.button41, styles.button41FlexBox]}>
                  <Image
                    style={[styles.interfaceLabel1, styles.interfaceLayout]}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.memberType}>View Route</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={[styles.featuresParent, styles.parentBorder]}>
              <Text style={[styles.features, styles.brandTypo]}>Features</Text>
              <View style={[styles.pros, styles.prosSpaceBlock]}>
                <Text style={[styles.features, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
              <View style={[styles.pros, styles.prosSpaceBlock]}>
                <Text style={[styles.features, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
              <View style={[styles.pros, styles.prosSpaceBlock]}>
                <Text style={[styles.features, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
            </View>
            <View style={[styles.warningParent, styles.parentBorder]}>
              <Text style={[styles.warning, styles.brandTypo]}>warning</Text>
              <View style={[styles.cons, styles.prosSpaceBlock]}>
                <Text style={[styles.warning, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
              <View style={[styles.cons, styles.prosSpaceBlock]}>
                <Text style={[styles.warning, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
              <View style={[styles.cons, styles.prosSpaceBlock]}>
                <Text style={[styles.warning, styles.brandTypo]}>
                  includes dairy
                </Text>
              </View>
              <View
                style={[
                  styles.viewProductsThatMatchesYouParent,
                  styles.frameParentFlexBox,
                ]}
              >
                <Text style={[styles.viewProductsThat, styles.textClr]}>
                  View products that matches you filter
                </Text>
                <Image
                  style={[styles.arrowArrowUpRightSm, styles.arrowLayout]}
                  contentFit="cover"
                  source={require("../assets/arrow--arrow-up-right-sm.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.similarProductsThatMatchesParent}>
            <Text style={[styles.similarProductsThat, styles.productClr]}>
              Similar Products that matches your filters
            </Text>
            <View style={[styles.suggestionsParent, styles.frameParentFlexBox]}>
              <Pressable onPress={() => navigation.navigate("ProductDetails")}>
                <Image
                  style={styles.previewChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameGroup}>
                  <Text style={[styles.productName1, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={styles.brand1Typo}>Brand</Text>
                  <Text style={[styles.text4, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.previewChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameGroup}>
                  <Text style={[styles.productName1, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={styles.brand1Typo}>Brand</Text>
                  <Text style={[styles.text4, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.previewChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameGroup}>
                  <Text style={[styles.productName1, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={styles.brand1Typo}>Brand</Text>
                  <Text style={[styles.text4, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.previewChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameGroup}>
                  <Text style={[styles.productName1, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={styles.brand1Typo}>Brand</Text>
                  <Text style={[styles.text4, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.previewChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53291.png")}
                />
                <View style={styles.productNameGroup}>
                  <Text style={[styles.productName1, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={styles.brand1Typo}>Brand</Text>
                  <Text style={[styles.text4, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.descriptionGroup}>
            <Text style={[styles.text, styles.textClr]}>Description</Text>
            <View style={styles.itemNoParent}>
              <Text style={[styles.manufacturingDate, styles.textClr]}>
                Item no.
              </Text>
              <Text style={[styles.xxxXx3, styles.textClr]}>1xxx-xx3</Text>
            </View>
            <Text style={[styles.loremIpsumDolor, styles.brand1Typo]}>
              Lorem ipsum dolor sit amet consectetur. Id bibendum elit gravida
              egestas nulla faucibus id rhoncus quam. Tellus morbi pellentesque
              ultricies tincidunt sapien enim purus id a. Ornare varius enim
              adipiscing aliquet. Porttitor in posuere et risus volutpat dolor
              nisi.
            </Text>
          </View>
          <View style={styles.similarProductsThatMatchesParent}>
            <View style={[styles.frameParent3, styles.wrapperFlexBox]}>
              <View style={styles.button3Parent}>
                <Image
                  style={styles.interfaceLayout}
                  contentFit="cover"
                  source={require("../assets/interface--star.png")}
                />
                <Image
                  style={styles.interfaceLayout}
                  contentFit="cover"
                  source={require("../assets/interface--star.png")}
                />
                <Image
                  style={styles.interfaceLayout}
                  contentFit="cover"
                  source={require("../assets/interface--star.png")}
                />
                <Image
                  style={styles.interfaceLayout}
                  contentFit="cover"
                  source={require("../assets/interface--star.png")}
                />
                <Image
                  style={styles.interfaceLayout}
                  contentFit="cover"
                  source={require("../assets/interface--star.png")}
                />
              </View>
              <Text style={[styles.productName, styles.productClr]}>
                1.6 k Reviews
              </Text>
            </View>
            <View style={styles.frameParent4}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53292.png")}
                />
                <Text style={[styles.user1, styles.textClr]}>User 1</Text>
              </View>
              <View style={styles.frameParent5}>
                <View style={styles.button3Parent}>
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                </View>
                <Text style={[styles.subjectSummary, styles.textClr]}>
                  subject/ summary
                </Text>
              </View>
              <Text style={[styles.reviewedOn20, styles.textClr]}>
                Reviewed on 20 june 2024
              </Text>
              <Text style={[styles.loremIpsumDolor2, styles.textClr]}>
                Lorem ipsum dolor sit amet consectetur. Platea lectus at ut
                maecenas suscipit urna. Leo nunc arcu arcu ipsum tempus.
                Bibendum ullamcorper dictum et a. Aliquet odio adipiscing cursus
                arcu vivamus orci semper aliquam lacinia.
              </Text>
            </View>
            <View style={styles.frameParent4}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53292.png")}
                />
                <Text style={[styles.user1, styles.textClr]}>User 1</Text>
              </View>
              <View style={styles.frameParent5}>
                <View style={styles.button3Parent}>
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                  <Image
                    style={styles.interfaceStar5}
                    contentFit="cover"
                    source={require("../assets/interface--star1.png")}
                  />
                </View>
                <Text style={[styles.subjectSummary, styles.textClr]}>
                  subject/ summary
                </Text>
              </View>
              <Text style={[styles.reviewedOn20, styles.textClr]}>
                Reviewed on 20 june 2024
              </Text>
              <Text style={[styles.loremIpsumDolor2, styles.textClr]}>
                Lorem ipsum dolor sit amet consectetur. Platea lectus at ut
                maecenas suscipit urna. Leo nunc arcu arcu ipsum tempus.
                Bibendum ullamcorper dictum et a. Aliquet odio adipiscing cursus
                arcu vivamus orci semper aliquam lacinia.
              </Text>
            </View>
          </View>
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
          style={styles.arrowLayout}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.productDetails1, styles.textTypo]}>
          Product Details
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
  cartClr: {
    color: Color.bG,
    textAlign: "left",
  },
  systemQrCodeLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  searchBarSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  arrowLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  productClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  textClr: {
    color: Color.subtext,
    textAlign: "left",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_11xs,
    paddingHorizontal: Padding.p_9xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  interfaceLayout: {
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dateParentBorder: {
    padding: Padding.p_8xs,
    borderWidth: 0.2,
    borderColor: Color.light,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    backgroundColor: Color.bG,
    alignSelf: "stretch",
  },
  brand1Typo: {
    fontSize: FontSize.size_7xs,
    color: Color.subtext,
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    alignSelf: "stretch",
    textAlign: "left",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  button41FlexBox: {
    marginLeft: 4,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  parentBorder: {
    padding: Padding.p_3xs,
    borderWidth: 0.5,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
  },
  brandTypo: {
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
  },
  prosSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    marginTop: 5,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  viewCart: {
    textAlign: "left",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  interfaceShoppingCart02: {
    marginLeft: 5,
  },
  button2: {
    height: 26,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.color2,
  },
  search: {
    color: Color.light,
    fontFamily: FontFamily.bODYBODYRegular,
    textAlign: "left",
    fontSize: FontSize.bODYBODYLight_size,
    flex: 1,
  },
  interfaceSearchMagnifyingParent: {
    backgroundColor: Color.bG,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    flex: 1,
  },
  menuMoreVertical: {
    marginLeft: 5,
  },
  searchBar: {
    alignItems: "center",
    flexDirection: "row",
  },
  previewChild: {
    width: 60,
    height: 60,
  },
  productName: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
  },
  brand: {
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    alignSelf: "stretch",
    fontSize: FontSize.bODYBODYLight_size,
  },
  memberType: {
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    textAlign: "left",
  },
  button3: {
    display: "none",
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
  productNameParent: {
    marginLeft: 17,
    alignSelf: "stretch",
    flex: 1,
  },
  preview: {
    width: 340,
    flexDirection: "row",
  },
  manufacturingDate: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  july2024: {
    marginTop: 4,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  expireDateParent: {
    marginTop: 4,
  },
  frameGroup: {
    width: 100,
  },
  description: {
    alignSelf: "stretch",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  xxxXx3: {
    marginLeft: 5,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  itemNoParent: {
    marginTop: 4,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  loremIpsumDolor: {
    marginTop: 4,
  },
  text1: {
    color: Color.color1,
    textAlign: "center",
    fontSize: FontSize.sMALLBold_size,
  },
  wrapper: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
  },
  frameView: {
    borderColor: "#00296b",
    borderWidth: 0.1,
    width: 43,
    paddingHorizontal: Padding.p_8xs,
    borderStyle: "solid",
    justifyContent: "space-between",
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.bG,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  addToCart: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    textAlign: "left",
  },
  interfaceShoppingCart021: {
    marginLeft: 2,
  },
  addToCartParent: {
    width: 70,
    paddingHorizontal: 8,
    backgroundColor: Color.color2,
  },
  button41: {
    backgroundColor: Color.color,
    paddingHorizontal: Padding.p_9xs,
    marginLeft: 4,
    alignSelf: "stretch",
  },
  frameContainer: {
    marginTop: 4,
  },
  descriptionParent: {
    width: 210,
  },
  frameParent: {
    marginTop: 13,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  features: {
    color: Color.greens,
    textAlign: "left",
    fontSize: FontSize.bODYBODYLight_size,
  },
  pros: {
    backgroundColor: Color.colorLime,
    marginTop: 5,
  },
  featuresParent: {
    borderColor: Color.colorLime,
    width: 163,
    backgroundColor: Color.colorWhite,
  },
  warning: {
    color: Color.reds,
    textAlign: "left",
    fontSize: FontSize.bODYBODYLight_size,
  },
  cons: {
    backgroundColor: Color.colorTomato,
    marginTop: 5,
  },
  viewProductsThat: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.bODYBODYLight_size,
    flex: 1,
  },
  arrowArrowUpRightSm: {
    marginLeft: 2,
  },
  viewProductsThatMatchesYouParent: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  warningParent: {
    borderColor: Color.colorTomato,
    width: 164,
  },
  frameParent1: {
    marginTop: 13,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  similarProductsThat: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  productName1: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  text4: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    alignSelf: "stretch",
  },
  productNameGroup: {
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
  similarProductsThatMatchesParent: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  descriptionGroup: {
    width: 210,
    marginTop: 13,
  },
  frameParent3: {
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_21xl,
    width: 20,
    height: 20,
  },
  user1: {
    marginLeft: 9,
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    fontSize: FontSize.sMALLBold_size,
  },
  interfaceStar5: {
    width: 8,
    height: 8,
    overflow: "hidden",
  },
  subjectSummary: {
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  frameParent5: {
    marginTop: 2,
    flexDirection: "row",
  },
  reviewedOn20: {
    marginTop: 2,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  loremIpsumDolor2: {
    marginTop: 2,
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  frameParent4: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  button2Parent: {
    top: 77,
    left: 23,
    width: 343,
    height: 712,
    alignItems: "flex-end",
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
  productDetails1: {
    fontSize: FontSize.h5H5Bold_size,
    marginLeft: 10,
    textAlign: "left",
    color: Color.bG,
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.color2,
  },
  productDetails: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ProductDetails;
