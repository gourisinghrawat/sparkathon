import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Cons = () => {
  return (
    <View style={styles.cons}>
      <Text style={styles.includesDairy}>includes dairy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  includesDairy: {
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    color: Color.reds,
    textAlign: "left",
  },
  cons: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorTomato,
    width: 144,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
  },
});

export default Cons;
