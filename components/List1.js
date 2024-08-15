import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const List1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.list}
      onPress={() => navigation.navigate("ListDetails")}
    >
      <View style={styles.list1Parent}>
        <Text style={styles.list1}>List 1</Text>
        <Text style={styles.dateCreated}>Date Created</Text>
        <View style={styles.button3Parent}>
          <View style={[styles.button3, styles.button3FlexBox]}>
            <Image
              style={styles.interfaceLabel}
              contentFit="cover"
              source={require("../assets/interface--label1.png")}
            />
            <Text style={[styles.memberType, styles.viewRouteTypo]}>Price</Text>
          </View>
          <Pressable
            style={[styles.viewRouteWrapper, styles.button3FlexBox]}
            onPress={() => navigation.navigate("Route1")}
          >
            <Text style={styles.viewRouteTypo}>view route</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.interfaceTrashFull}
        contentFit="cover"
        source={require("../assets/interface--trash-full1.png")}
      />
      <Image
        style={styles.interfaceTrashFull}
        contentFit="cover"
        source={require("../assets/edit--edit-pencil-01.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button3FlexBox: {
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  viewRouteTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  list1: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.h5H5Bold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  dateCreated: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    color: Color.subtext,
    marginTop: 2,
    fontSize: FontSize.sMALLBold_size,
    alignSelf: "stretch",
    textAlign: "left",
  },
  interfaceLabel: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  memberType: {
    marginLeft: 2,
  },
  button3: {
    backgroundColor: Color.color2,
    paddingVertical: Padding.p_11xs,
  },
  viewRouteWrapper: {
    backgroundColor: Color.color,
    paddingVertical: Padding.p_12xs,
    marginLeft: 5,
  },
  button3Parent: {
    marginTop: 2,
    flexDirection: "row",
  },
  list1Parent: {
    flex: 1,
  },
  interfaceTrashFull: {
    width: 16,
    height: 16,
    marginLeft: 17,
    overflow: "hidden",
  },
  list: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    width: 331,
    padding: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default List1;
