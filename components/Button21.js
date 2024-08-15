import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Button21 = () => {
  return (
    <View style={styles.button3}>
      <Image
        style={styles.interfaceLabel}
        contentFit="cover"
        source={require("../assets/interface--label1.png")}
      />
      <Text style={styles.memberType}>Member type</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  interfaceLabel: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  memberType: {
    fontSize: FontSize.sMALLBold_size,
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 2,
  },
  button3: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.color2,
    height: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Button21;
