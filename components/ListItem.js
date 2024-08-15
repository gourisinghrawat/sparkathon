import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ListItem = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listItem}>
      <View style={styles.frameParent}>
        <View style={styles.productNameParent}>
          <Text style={styles.productName}>Product Name</Text>
          <Text style={styles.category}>Category</Text>
          <View style={styles.button3Parent}>
            <Pressable
              style={styles.button3}
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
        <Image
          style={styles.interfaceTrashFull}
          contentFit="cover"
          source={require("../assets/interface--trash-full.png")}
        />
      </View>
      <View style={styles.leftCounterParent}>
        <Text style={styles.shelfNo30Typo}>left counter</Text>
        <Text style={[styles.shelfNo30, styles.shelfNo30Typo]}>
          Shelf no. 30
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  shelfNo30Typo: {
    fontFamily: FontFamily.sMALLSMALLMedium,
    fontWeight: "500",
    fontSize: FontSize.bODYBODYLight_size,
    color: Color.subtext,
    textAlign: "left",
  },
  productName: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.h5H5Bold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  category: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    marginTop: 2,
    color: Color.subtext,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
    alignSelf: "stretch",
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
  button3: {
    backgroundColor: Color.color2,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
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
  button3Parent: {
    marginTop: 2,
    flexDirection: "row",
  },
  productNameParent: {
    flex: 1,
  },
  interfaceTrashFull: {
    width: 24,
    height: 24,
    marginLeft: 17,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  shelfNo30: {
    marginTop: 4,
  },
  leftCounterParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    borderStyle: "solid",
    borderColor: Color.light,
    borderWidth: 0.2,
    padding: Padding.p_8xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
  listItem: {
    width: 331,
  },
});

export default ListItem;
