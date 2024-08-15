import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";

const NAVIGATION1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigation}>
      <Pressable
        style={styles.navigationHouse01}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/navigation--house-011.png")}
        />
      </Pressable>
      <Pressable
        style={styles.navigationHouse01}
        onPress={() => navigation.navigate("MapOfTheMart")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/navigation--map.png")}
        />
      </Pressable>
      <Pressable
        style={styles.navigationHouse01}
        onPress={() => navigation.navigate("ProductScanner")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/system--qr-code1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.navigationHouse01}
        onPress={() => navigation.navigate("MyCart")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/interface--shopping-cart-021.png")}
        />
      </Pressable>
      <Pressable
        style={styles.navigationHouse01}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/user--user-02.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  navigationHouse01: {
    width: 35,
    height: 35,
  },
  navigation: {
    backgroundColor: Color.color1,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default NAVIGATION1;
