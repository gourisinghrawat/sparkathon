import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const Preview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.preview}>
      <Image
        style={styles.previewChild}
        contentFit="cover"
        source={require("../assets/rectangle-53291.png")}
      />
      <View style={styles.productNameParent}>
        <Text style={[styles.productName, styles.textTypo]}>Product Name</Text>
        <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
        <View style={styles.button3Parent}>
          <Pressable
            style={styles.button3}
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
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  textFlexBox: {
    color: Color.subtext,
    textAlign: "left",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    marginLeft: 5,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  interfaceLayout: {
    overflow: "hidden",
    height: 12,
    width: 12,
  },
  previewChild: {
    width: 60,
    height: 60,
  },
  productName: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
    textAlign: "left",
  },
  brand: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    fontSize: FontSize.sMALLBold_size,
  },
  text: {
    fontSize: FontSize.bODYBODYLight_size,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  memberType: {
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.colorWhite,
    marginLeft: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  button3: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xs,
    backgroundColor: Color.color2,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  interfaceLabel1: {
    display: "none",
  },
  button4: {
    backgroundColor: Color.color2,
    marginLeft: 5,
  },
  button5: {
    backgroundColor: Color.greens,
  },
  button3Parent: {
    flexDirection: "row",
  },
  productNameParent: {
    flex: 1,
    marginLeft: 17,
    alignSelf: "stretch",
  },
  preview: {
    width: 340,
    flexDirection: "row",
  },
});

export default Preview;
