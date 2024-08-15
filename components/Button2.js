import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button2 = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.viewCart}>View Cart</Text>
      <Image
        style={styles.interfaceShoppingCart02}
        contentFit="cover"
        source={require("../assets/interface--shopping-cart-027.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCart: {
    fontSize: FontSize.h5H5Bold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.bG,
    textAlign: "left",
  },
  interfaceShoppingCart02: {
    width: 20,
    height: 20,
    overflow: "hidden",
    marginLeft: 10,
  },
  button: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.color2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default Button2;
