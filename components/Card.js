import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Card = () => {
  return (
    <View style={styles.card1}>
      <Text style={styles.membership}>Membership</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  membership: {
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    color: Color.subtext,
    textAlign: "left",
  },
  card1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    width: 340,
    padding: Padding.p_8xs,
  },
});

export default Card;
