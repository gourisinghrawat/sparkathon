const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Route4 from "./screens/Route4";
import MapOfTheMart from "./screens/MapOfTheMart";
import ListDetails from "./screens/ListDetails";
import ProductDetails from "./screens/ProductDetails";
import Preferences from "./screens/Preferences";
import ChangeMart from "./screens/ChangeMart";
import Profile from "./screens/Profile";
import ProductScanner from "./screens/ProductScanner";
import SelfCheckout from "./screens/SelfCheckout";
import AllLists from "./screens/AllLists";
import MyCart from "./screens/MyCart";
import Card from "./components/Card";
import Preview from "./components/Preview";
import List1 from "./components/List1";
import Suggestions from "./components/Suggestions";
import CartItems from "./components/CartItems";
import ListItem from "./components/ListItem";
import Cons from "./components/Cons";
import SearchBar from "./components/SearchBar";
import Pros from "./components/Pros";
import Categorise from "./components/Categorise";
import Button1 from "./components/Button1";
import NAVIGATION1 from "./components/NAVIGATION1";
import Cons1 from "./components/Cons1";
import Button2 from "./components/Button2";
import Button21 from "./components/Button21";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Route1"
              component={Route4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapOfTheMart"
              component={MapOfTheMart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListDetails"
              component={ListDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Preferences"
              component={Preferences}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeMart"
              component={ChangeMart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductScanner"
              component={ProductScanner}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelfCheckout"
              component={SelfCheckout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllLists"
              component={AllLists}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
