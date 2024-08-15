import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Categorise = () => {
  return (
    <View style={styles.categorise}>
      <View style={styles.ediblesParent}>
        <Text style={styles.edibles}>Edibles</Text>
        <Image
          style={styles.editEditPencil01}
          contentFit="cover"
          source={require("../assets/edit--edit-pencil-01.png")}
        />
      </View>
      <View style={styles.veganParent}>
        <Text style={styles.veganTypo}>Vegan</Text>
        <Text style={[styles.glutenFree, styles.veganTypo]}>Gluten free</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  veganTypo: {
    fontFamily: FontFamily.bODYBODYRegular,
    textAlign: "left",
    color: Color.subtext,
    fontSize: FontSize.bODYBODYLight_size,
    alignSelf: "stretch",
  },
  edibles: {
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    textAlign: "left",
    color: Color.subtext,
    fontSize: FontSize.bODYBODYLight_size,
  },
  editEditPencil01: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  ediblesParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_8xs,
    alignSelf: "stretch",
  },
  glutenFree: {
    marginTop: 2,
  },
  veganParent: {
    width: 49,
    marginTop: 5,
  },
  categorise: {
    width: 340,
  },
});

export default Categorise;
