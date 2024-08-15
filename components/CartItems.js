import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const CartItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartItems}>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-53291.png")}
        />
        <View style={styles.productNameParent}>
          <Text style={styles.productName}>Product Name</Text>
          <Text style={styles.brand}>Brand</Text>
          <Text style={[styles.text, styles.textTypo]}>$100.00</Text>
          <View style={styles.button6Parent}>
            <Pressable
              style={styles.button6}
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image
                style={[styles.interfaceLabel, styles.interfaceLayout]}
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
        <View style={styles.qty10Parent}>
          <Text style={styles.textTypo}>Qty: 10</Text>
          <Text style={[styles.text1, styles.textTypo]}>$1,000</Text>
        </View>
        <Image
          style={styles.interfaceTrashFull}
          contentFit="cover"
          source={require("../assets/interface--trash-full.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.bODYBODYLight_size,
    color: Color.subtext,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  interfaceLayout: {
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  buttonFlexBox: {
    marginLeft: 5,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 60,
    height: 60,
  },
  productName: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  brand: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    color: Color.subtext,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
    textAlign: "left",
  },
  text: {
    alignSelf: "stretch",
    fontSize: FontSize.bODYBODYLight_size,
  },
  interfaceLabel: {
    overflow: "hidden",
  },
  memberType: {
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  button6: {
    backgroundColor: Color.color2,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  interfaceLabel1: {
    display: "none",
    overflow: "hidden",
  },
  button5: {
    backgroundColor: Color.greens,
  },
  button4: {
    backgroundColor: Color.color,
  },
  button6Parent: {
    flexDirection: "row",
  },
  productNameParent: {
    flex: 1,
    marginLeft: 17,
  },
  text1: {
    marginTop: 5,
  },
  qty10Parent: {
    marginLeft: 17,
    justifyContent: "center",
  },
  interfaceTrashFull: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 17,
  },
  rectangleParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 340,
  },
  cartItems: {
    width: 340,
  },
});

export default CartItems;
