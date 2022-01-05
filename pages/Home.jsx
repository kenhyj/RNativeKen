import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>The First Page of the React Native</Text>
      <Text>Let's start with a Home or Login Page</Text> 
      <TextInput editable placeholder='Username'/>
      <TextInput editable placeholder='Password'/>
      <StatusBar style="auto" />
    </View>
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
