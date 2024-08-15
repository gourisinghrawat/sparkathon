import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button1 = () => {
  return (
    <View style={styles.button2}>
      <Text style={styles.viewCart}>View Cart</Text>
      <Image
        style={styles.interfaceShoppingCart02}
        contentFit="cover"
        source={require("../assets/interface--shopping-cart-02.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewCart: {
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    color: Color.bG,
    textAlign: "left",
  },
  interfaceShoppingCart02: {
    width: 16,
    height: 16,
    overflow: "hidden",
    marginLeft: 5,
  },
  button2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.color2,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
  },
});

export default Button1;
