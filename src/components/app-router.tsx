// Modules
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

// Types
type AppRouterProps = {};

// Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dummies
const DummyScreen = (): React.ReactElement => (
  <View className="w-full h-full bg-white items-center justify-center">
    <Text className="text-2xl font-ft-regular">Screen</Text>
  </View>
);

// Stacks
const FruitsStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="FruitsList"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="FruitsList" component={DummyScreen} />
  </Stack.Navigator>
);
const VeggiesStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="VeggiesList"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="VeggiesList" component={DummyScreen} />
  </Stack.Navigator>
);

// Tabs
const Tabs = (): React.ReactElement => (
  <Tab.Navigator
    backBehavior="history"
    initialRouteName="Fruits"
    detachInactiveScreens={false}
    screenOptions={{
      headerShown: false,
      lazy: false,
    }}
  >
    <Tab.Screen name="Fruits" component={FruitsStack} />
    <Tab.Screen name="Veggies" component={VeggiesStack} />
  </Tab.Navigator>
);

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactNode => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
