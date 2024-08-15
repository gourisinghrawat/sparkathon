import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ListDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.listDetails, styles.iconLayout]}>
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
        <View style={styles.parentFlexBox}>
          <Pressable
            style={styles.button2FlexBox}
            onPress={() => navigation.navigate("ListDetails")}
          >
            <Text style={[styles.viewCart, styles.addTypo]}>Create a List</Text>
            <Image
              style={[styles.interfaceShoppingCart021, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.button2, styles.button2FlexBox]}
            onPress={() => navigation.navigate("MyCart")}
          >
            <Text style={[styles.viewCart, styles.addTypo]}>View Cart</Text>
            <Image
              style={[styles.interfaceShoppingCart022, styles.interfaceLayout1]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.list10Parent, styles.parentFlexBox]}>
            <Text style={[styles.list10, styles.listTypo]}>List 10</Text>
            <View style={styles.button2FlexBox}>
              <Text style={[styles.viewCart, styles.addTypo]}>View List</Text>
              <Image
                style={[
                  styles.interfaceShoppingCart021,
                  styles.interfaceLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/interface--shopping-cart-02.png")}
              />
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameFlexBox}>
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.productTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.category, styles.categoryClr]}>
                  Category
                </Text>
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
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={styles.memberType}>In Stock</Text>
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
                    <Text style={styles.memberType}>View Route</Text>
                  </Pressable>
                </View>
              </View>
              <Image
                style={[styles.interfaceTrashFull, styles.editAddToQueueLayout]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
            <View
              style={[styles.leftCounterParent, styles.leftCounterParentBorder]}
            >
              <Text style={[styles.leftCounter, styles.categoryClr]}>
                left counter
              </Text>
              <Text style={[styles.shelfNo30, styles.categoryClr]}>
                Shelf no. 30
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameFlexBox}>
              <View style={styles.productNameParent}>
                <Text style={[styles.productName, styles.productTypo]}>
                  Product Name
                </Text>
                <Text style={[styles.category, styles.categoryClr]}>
                  Category
                </Text>
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
                  <View style={[styles.button5, styles.buttonFlexBox]}>
                    <Image
                      style={[styles.interfaceLabel1, styles.interfaceLayout]}
                      contentFit="cover"
                      source={require("../assets/interface--label1.png")}
                    />
                    <Text style={styles.memberType}>In Stock</Text>
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
                    <Text style={styles.memberType}>View Route</Text>
                  </Pressable>
                </View>
              </View>
              <Image
                style={[styles.interfaceTrashFull, styles.editAddToQueueLayout]}
                contentFit="cover"
                source={require("../assets/interface--trash-full.png")}
              />
            </View>
            <View
              style={[styles.leftCounterParent, styles.leftCounterParentBorder]}
            >
              <Text style={[styles.leftCounter, styles.categoryClr]}>
                left counter
              </Text>
              <Text style={[styles.shelfNo30, styles.categoryClr]}>
                Shelf no. 30
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.frameFlexBox]}>
            <View
              style={[
                styles.productNameWrapper,
                styles.leftCounterParentBorder,
              ]}
            >
              <Text style={[styles.productName2, styles.productTypo]}>
                Product Name
              </Text>
            </View>
            <Image
              style={[styles.editAddToQueue, styles.editAddToQueueLayout]}
              contentFit="cover"
              source={require("../assets/edit--add-to-queue.png")}
            />
            <View style={styles.addWrapper}>
              <Text style={[styles.add, styles.productTypo]}>Add</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={styles.editAddToQueueLayout}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.list101, styles.listTypo]}>List 10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  interfaceLayout1: {
    height: 16,
    width: 16,
    marginLeft: 5,
    overflow: "hidden",
  },
  button2FlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    backgroundColor: Color.color2,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  listTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  productTypo: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    textAlign: "left",
  },
  categoryClr: {
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
  editAddToQueueLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  leftCounterParentBorder: {
    borderWidth: 0.2,
    borderColor: Color.light,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
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
  viewCart: {
    textAlign: "left",
    color: Color.bG,
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "500",
  },
  interfaceShoppingCart021: {
    marginLeft: 5,
    display: "none",
  },
  interfaceShoppingCart022: {
    marginLeft: 5,
  },
  button2: {
    marginLeft: 5,
  },
  list10: {
    color: Color.colorBlack,
    fontSize: FontSize.h5H5Bold_size,
    fontWeight: "700",
    textAlign: "left",
  },
  list10Parent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  productName: {
    color: Color.colorBlack,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  category: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    marginTop: 2,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  memberType: {
    fontFamily: FontFamily.bODYBODYRegular,
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
  button5: {
    backgroundColor: Color.greens,
    marginLeft: 5,
  },
  button4: {
    backgroundColor: Color.color,
    marginLeft: 5,
  },
  button3Parent: {
    marginTop: 2,
    flexDirection: "row",
  },
  productNameParent: {
    flex: 1,
  },
  interfaceTrashFull: {
    marginLeft: 17,
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
    backgroundColor: Color.bG,
    padding: Padding.p_8xs,
    marginTop: 10,
  },
  frameGroup: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  productName2: {
    color: Color.light,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  productNameWrapper: {
    paddingVertical: 0,
    borderRadius: Border.br_11xs,
    borderWidth: 0.2,
    borderColor: Color.light,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
  },
  editAddToQueue: {
    marginLeft: 2,
  },
  add: {
    color: Color.colorBlack,
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
  },
  addWrapper: {
    marginLeft: 2,
  },
  frameParent1: {
    marginTop: 10,
  },
  frameParent: {
    top: 88,
    left: 30,
    width: 331,
    alignItems: "flex-end",
    position: "absolute",
  },
  list101: {
    marginLeft: 10,
    fontSize: FontSize.h5H5Bold_size,
    fontWeight: "700",
    textAlign: "left",
    color: Color.bG,
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.color2,
  },
  listDetails: {
    backgroundColor: Color.colorWhite,
    height: 844,
    flex: 1,
  },
});

export default ListDetails;
