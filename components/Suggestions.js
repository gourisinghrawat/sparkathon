import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Suggestions = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("ProductDetails")}>
      <Image
        style={styles.suggestionsChild}
        contentFit="cover"
        source={require("../assets/rectangle-53291.png")}
      />
      <View style={styles.productNameParent}>
        <Text style={styles.productName}>Product Name</Text>
        <Text style={[styles.brand, styles.textFlexBox]}>Brand</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$100.00</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    color: Color.subtext,
    alignSelf: "stretch",
    textAlign: "left",
  },
  suggestionsChild: {
    width: 60,
    height: 60,
  },
  productName: {
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.sMALLBold_size,
  },
  brand: {
    fontSize: FontSize.size_7xs,
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
  },
  text: {
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
  },
  productNameParent: {
    marginTop: 5,
  },
});

export default Suggestions;
