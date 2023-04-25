import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import { ProductDetailsScreen } from "../Screens/ProductDetailsScreen";
import { ShoppingCart } from "../Screens/ShoppingCart";
import { DrawerNavigation } from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#080d19",
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
