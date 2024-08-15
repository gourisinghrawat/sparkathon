import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AllLists = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.allLists, styles.iconLayout]}>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/navigation--house-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MapOfTheMart")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/navigation--map.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("ProductScanner")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/system--qr-code1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/interface--shopping-cart-021.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationHouse01}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user--user-02.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.instanceParent}>
          <Pressable
            style={styles.button2FlexBox}
            onPress={() => navigation.navigate("ListDetails")}
          >
            <Text style={styles.viewCart}>Create a List</Text>
            <Image
              style={[styles.interfaceShoppingCart021, styles.interfaceLayout]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.button2, styles.button2FlexBox]}
            onPress={() => navigation.navigate("MyCart")}
          >
            <Text style={styles.viewCart}>View Cart</Text>
            <Image
              style={[styles.interfaceShoppingCart022, styles.interfaceLayout]}
              contentFit="cover"
              source={require("../assets/interface--shopping-cart-02.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.list}
          onPress={() => navigation.navigate("ListDetails")}
        >
          <View style={styles.list1Parent}>
            <Text style={[styles.list1, styles.listTypo]}>List 1</Text>
            <Text style={styles.dateCreated}>Date Created</Text>
            <View style={styles.button3Parent}>
              <View style={[styles.button3, styles.button3FlexBox]}>
                <Image
                  style={styles.interfaceLabel}
                  contentFit="cover"
                  source={require("../assets/interface--label1.png")}
                />
                <Text style={[styles.memberType, styles.viewRouteTypo]}>
                  Price
                </Text>
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
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/interface--trash-full1.png")}
          />
          <Image
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/edit--edit-pencil-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.list}
          onPress={() => navigation.navigate("ListDetails")}
        >
          <View style={styles.list1Parent}>
            <Text style={[styles.list1, styles.listTypo]}>List 1</Text>
            <Text style={styles.dateCreated}>Date Created</Text>
            <View style={styles.button3Parent}>
              <View style={[styles.button3, styles.button3FlexBox]}>
                <Image
                  style={styles.interfaceLabel}
                  contentFit="cover"
                  source={require("../assets/interface--label1.png")}
                />
                <Text style={[styles.memberType, styles.viewRouteTypo]}>
                  Price
                </Text>
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
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/interface--trash-full1.png")}
          />
          <Image
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/edit--edit-pencil-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.list}
          onPress={() => navigation.navigate("ListDetails")}
        >
          <View style={styles.list1Parent}>
            <Text style={[styles.list1, styles.listTypo]}>List 1</Text>
            <Text style={styles.dateCreated}>Date Created</Text>
            <View style={styles.button3Parent}>
              <View style={[styles.button3, styles.button3FlexBox]}>
                <Image
                  style={styles.interfaceLabel}
                  contentFit="cover"
                  source={require("../assets/interface--label1.png")}
                />
                <Text style={[styles.memberType, styles.viewRouteTypo]}>
                  Price
                </Text>
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
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/interface--trash-full1.png")}
          />
          <Image
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/edit--edit-pencil-01.png")}
          />
        </Pressable>
        <Pressable
          style={styles.list}
          onPress={() => navigation.navigate("ListDetails")}
        >
          <View style={styles.list1Parent}>
            <Text style={[styles.list1, styles.listTypo]}>List 1</Text>
            <Text style={styles.dateCreated}>Date Created</Text>
            <View style={styles.button3Parent}>
              <View style={[styles.button3, styles.button3FlexBox]}>
                <Image
                  style={styles.interfaceLabel}
                  contentFit="cover"
                  source={require("../assets/interface--label1.png")}
                />
                <Text style={[styles.memberType, styles.viewRouteTypo]}>
                  Price
                </Text>
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
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/interface--trash-full1.png")}
          />
          <Image
            style={[styles.interfaceTrashFull, styles.interfaceLayout]}
            contentFit="cover"
            source={require("../assets/edit--edit-pencil-01.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.arrowChevronLeftParent, styles.navigationPosition]}>
        <Image
          style={styles.arrowChevronLeft}
          contentFit="cover"
          source={require("../assets/arrow--chevron-left.png")}
        />
        <Text style={[styles.myList, styles.listTypo]}>My List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navigationPosition: {
    paddingVertical: Padding.p_3xs,
    width: 390,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  interfaceLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  button2FlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    backgroundColor: Color.color2,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  listTypo: {
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
    textAlign: "left",
  },
  button3FlexBox: {
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  viewRouteTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.bODYBODYRegular,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  navigationHouse01: {
    width: 35,
    height: 35,
  },
  navigation: {
    top: 789,
    backgroundColor: Color.color1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
  },
  viewCart: {
    fontSize: FontSize.bODYBODYLight_size,
    fontWeight: "500",
    fontFamily: FontFamily.sMALLSMALLMedium,
    textAlign: "left",
    color: Color.bG,
  },
  interfaceShoppingCart021: {
    display: "none",
    marginLeft: 5,
  },
  interfaceShoppingCart022: {
    marginLeft: 5,
  },
  button2: {
    marginLeft: 5,
  },
  instanceParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  list1: {
    fontSize: FontSize.cAPTIONCAPTIONBold_size,
    color: Color.colorBlack,
  },
  dateCreated: {
    fontWeight: "300",
    fontFamily: FontFamily.bODYBODYLight,
    color: Color.subtext,
    marginTop: 2,
    fontSize: FontSize.sMALLBold_size,
    textAlign: "left",
    alignSelf: "stretch",
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
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.color2,
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
    marginLeft: 17,
  },
  list: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bG,
    padding: Padding.p_8xs,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 88,
    left: 30,
    width: 331,
    alignItems: "flex-end",
    position: "absolute",
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  myList: {
    fontSize: FontSize.h5H5Bold_size,
    marginLeft: 10,
    color: Color.bG,
    fontFamily: FontFamily.h5H5Bold,
    fontWeight: "700",
  },
  arrowChevronLeftParent: {
    top: 0,
    height: 55,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.color2,
  },
  allLists: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default AllLists;
