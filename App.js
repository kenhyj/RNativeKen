import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import reducers from "./redux";
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux'


import Login from "./pages/Login";

export default function App() {
  return (
    <StoreProvider store={createStore(reducers)}>
      <View style={styles.container}>
        <Text>The First Page of the React Native</Text>
        <Text>Let's start with a Home or Login Page</Text> 
        <Login/>
        <StatusBar style="auto" />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
