import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SearchBar = () => {
  return (
    <View style={[styles.searchBar, styles.searchFlexBox]}>
      <View
        style={[styles.interfaceSearchMagnifyingParent, styles.searchFlexBox]}
      >
        <Image
          style={styles.interfaceSearchMagnifying}
          contentFit="cover"
          source={require("../assets/interface--search-magnifying-glass.png")}
        />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.systemQrCode}
          contentFit="cover"
          source={require("../assets/system--qr-code.png")}
        />
      </View>
      <Image
        style={styles.menuMoreVertical}
        contentFit="cover"
        source={require("../assets/menu--more-vertical.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  interfaceSearchMagnifying: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.bODYBODYLight_size,
    fontFamily: FontFamily.bODYBODYRegular,
    color: Color.light,
    textAlign: "left",
    flex: 1,
  },
  systemQrCode: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  interfaceSearchMagnifyingParent: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.bG,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    flex: 1,
  },
  menuMoreVertical: {
    width: 24,
    height: 24,
    marginLeft: 5,
    overflow: "hidden",
  },
  searchBar: {
    width: 343,
  },
});

export default SearchBar;
