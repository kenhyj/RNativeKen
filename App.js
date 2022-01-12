import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import reducers from "./redux";
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';


import Login from "./pages/Login";
import Home from './pages/Home';

// https://reactnavigation.org/docs/drawer-based-navigation
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreProvider store={createStore(reducers)}>
      <NavigationContainer>
        <DrawerNavigatorBar />
      </NavigationContainer>
      <View>
        <Text>kenhyj React Native</Text>
        {/* <NavigatorBar></NavigatorBar> */}
        <StatusBar style="auto" />
      </View>
    </StoreProvider>
  );
}

const StackNavigatorBar = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const DrawerNavigatorBar = () => {
  return (
    <Drawer.Navigator initialRouteName='Login'>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

const BottomTabNavigatorBar = () => {
  return (
    <Tab.Navigator initialRouteName='Login'>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
