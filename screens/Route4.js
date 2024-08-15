import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Route4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.route}>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox1}>
          <Pressable
            style={[styles.viewCartParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("ListDetails")}
          >
            <Text style={[styles.viewCart, styles.route1Clr]}>
              Create a List
            </Text>
            <Image
              style={[styles.interfaceShoppingCart02, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.button2, styles.parentFlexBox]}
            onPress={() => navigation.navigate("MyCart")}
          >
            <Text style={[styles.viewCart, styles.route1Clr]}>View Cart</Text>
            <Image
              style={[styles.interfaceShoppingCart021, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
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
            <Text style={styles.search}>Search</Text>
            <Image
              style={styles.interfaceLayout1}
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
        <View style={styles.frameGroup}>
          <View style={styles.list10Parent}>
            <Text style={[styles.list10, styles.productClr]}>List 10</Text>
            <View style={[styles.suggestionsParent, styles.parentFlexBox1]}>
              <Pressable onPress={() => navigation.navigate("ProductDetails")}>
                <Image
                  style={styles.suggestionsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-5329.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={[styles.productName, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                  <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.suggestionsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-5329.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={[styles.productName, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                  <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.suggestionsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-5329.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={[styles.productName, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                  <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.suggestionsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-5329.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={[styles.productName, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                  <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
              <Pressable
                style={styles.suggestions1}
                onPress={() => navigation.navigate("ProductDetails")}
              >
                <Image
                  style={styles.suggestionsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-5329.png")}
                />
                <View style={styles.productNameParent}>
                  <Text style={[styles.productName, styles.productClr]}>
                    Product Name
                  </Text>
                  <Text style={[styles.brand, styles.textClr]}>Brand</Text>
                  <Text style={[styles.text, styles.textClr]}>$100.00</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <Text style={[styles.closestItem, styles.productClr]}>
            Closest Item
          </Text>
          <View style={styles.preview}>
            <Image
              style={styles.suggestionsChild}
              contentFit="cover"
              source={require("../assets/rectangle-5329.png")}
            />
            <View style={styles.productNameParent2}>
              <Text style={[styles.productName5, styles.productClr]}>
                Product Name
              </Text>
              <Text style={[styles.brand5, styles.textClr]}>Brand</Text>
              <Text style={[styles.text5, styles.textClr]}>$100.00</Text>
              <View style={styles.button3Parent}>
                <Pressable
                  style={[styles.button3, styles.buttonFlexBox]}
                  onPress={() => navigation.navigate("ProductDetails")}
                >
                  <Image
                    style={styles.interfaceLayout}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={styles.memberType}>View Product</Text>
                </Pressable>
                <View style={[styles.button4, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.interfaceLabel1, styles.interfaceLayout]}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={styles.memberType}>Offers</Text>
                </View>
                <View style={[styles.button5, styles.buttonFlexBox]}>
                  <Image
                    style={[styles.interfaceLabel1, styles.interfaceLayout]}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={styles.memberType}>In Stock</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.leftCounterParent}>
            <Text style={[styles.leftCounter, styles.textClr]}>
              left counter
            </Text>
            <Text style={[styles.shelfNo30, styles.textClr]}>Shelf no. 30</Text>
          </View>
          <Text style={[styles.closestItem, styles.productClr]}>Map</Text>
          <View style={styles.map1}>
            <View style={[styles.group, styles.groupPosition]}>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <Image
                style={[styles.groupIcon2, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group2.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group3.png")}
              />
              <Text style={[styles.lowervailsburg, styles.unionTypo]}>
                LOWERVAILSBURG
              </Text>
              <Text style={[styles.street, styles.unionTypo]}>STREET</Text>
              <Text style={[styles.union, styles.unionTypo]}>UNION</Text>
              <Text style={[styles.streetName, styles.streetTypo1]}>
                street name
              </Text>
              <Text style={[styles.streetName1, styles.streetTypo]}>
                street name
              </Text>
              <Text style={[styles.streetName2, styles.streetTypo1]}>
                street name
              </Text>
              <Text style={[styles.streetName3, styles.streetTypo]}>
                street name
              </Text>
              <Text style={[styles.streetName4, styles.streetTypo1]}>
                street name
              </Text>
            </View>
            <Image
              style={styles.mapChild}
              contentFit="cover"
              source={require("../assets/group-33290.png")}
            />
            <Image
              style={styles.mapItem}
              contentFit="cover"
              source={require("../assets/group-33291.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/navigation--house-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MapOfTheMart")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/navigation--map.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("ProductScanner")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/system--qr-code1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-021.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/user--user-02.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={styles.menuMoreVerticalLayout}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.route1, styles.text5Typo]}>Route</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  route1Clr: {
    color: Color.bG,
    textAlign: "left",
  },
  interfaceLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuMoreVerticalLayout: {
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
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  interfaceLayout: {
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  unionTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.size_4xs_1,
    height: "2.27%",
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  streetTypo1: {
    transform: [
      {
        rotate: "-75.8deg",
      },
    ],
    color: Color.colorGray_100,
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.montserratMedium,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  streetTypo: {
    width: "8.2%",
    height: "1.58%",
    transform: [
      {
        rotate: "-75.8deg",
      },
    ],
    color: Color.colorGray_100,
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.montserratMedium,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text5Typo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  viewCart: {
    textAlign: "left",
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
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
  interfaceShoppingCart021: {
    marginLeft: 5,
  },
  button2: {
    marginLeft: 5,
    backgroundColor: Color.color2,
    alignSelf: "stretch",
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
    flex: 1,
  },
  menuMoreVertical: {
    marginLeft: 5,
  },
  searchBar: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  list10: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  suggestionsChild: {
    width: 60,
    height: 60,
  },
  productName: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  brand: {
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    color: Color.subtext,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    alignSelf: "stretch",
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
  list10Parent: {
    width: 340,
  },
  closestItem: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    marginTop: 10,
    alignSelf: "stretch",
  },
  productName5: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
  },
  brand5: {
    fontFamily: FontFamily.bODYBODYLight,
    fontWeight: "300",
    color: Color.subtext,
    alignSelf: "stretch",
    fontSize: FontSize.sMALLBold_size,
  },
  text5: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    fontSize: FontSize.bODYBODYLight_size,
    alignSelf: "stretch",
  },
  memberType: {
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
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
    marginTop: 10,
    flexDirection: "row",
  },
  leftCounter: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  shelfNo30: {
    marginTop: 4,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
  },
  leftCounterParent: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    backgroundColor: Color.bG,
    marginTop: 10,
    alignSelf: "stretch",
  },
  vectorIcon: {
    height: "98.27%",
    width: "87.94%",
    top: "0.41%",
    right: "7.71%",
    bottom: "1.32%",
    left: "4.35%",
  },
  groupIcon: {
    height: "99.64%",
    width: "96%",
    top: "0.08%",
    right: "4%",
    bottom: "0.28%",
    left: "0%",
  },
  groupIcon1: {
    height: "98.5%",
    width: "90.87%",
    top: "0.59%",
    right: "6.2%",
    bottom: "0.9%",
    left: "2.93%",
  },
  groupIcon2: {
    width: "91.16%",
    right: "5.36%",
    left: "3.48%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  vectorIcon1: {
    height: "7.75%",
    width: "1.71%",
    top: "12.95%",
    right: "32.26%",
    bottom: "79.3%",
    left: "66.03%",
  },
  groupIcon3: {
    height: "37.24%",
    width: "73.74%",
    top: "33%",
    right: "6%",
    bottom: "29.77%",
    left: "20.26%",
  },
  lowervailsburg: {
    width: "24.17%",
    top: "44.32%",
    left: "75.83%",
  },
  street: {
    width: "9.68%",
    top: "66.69%",
    left: "39.16%",
  },
  union: {
    width: "8.75%",
    top: "18.09%",
    left: "34.72%",
  },
  streetName: {
    height: "1.6%",
    width: "8%",
    top: "38.09%",
    left: "56.96%",
  },
  streetName1: {
    top: "57.8%",
    left: "64.41%",
  },
  streetName2: {
    height: "1.4%",
    width: "9.22%",
    top: "55.48%",
    left: "27.3%",
  },
  streetName3: {
    top: "74.03%",
    left: "46.46%",
  },
  streetName4: {
    height: "1.47%",
    width: "8.78%",
    top: "20.41%",
    left: "24.96%",
  },
  group: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  mapChild: {
    top: 273,
    left: 147,
    width: 20,
    height: 31,
    position: "absolute",
  },
  mapItem: {
    top: 77,
    left: 96,
    width: 153,
    height: 168,
    position: "absolute",
  },
  map1: {
    height: 387,
    marginTop: 10,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameGroup: {
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    top: 72,
    left: 23,
    width: 345,
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  route1: {
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
  route: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Route4;
