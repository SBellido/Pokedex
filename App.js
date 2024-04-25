import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Bienvenido a Idun</Text>
        <Hello firstname="Perico" lastname="García"/>
        {/* <Hello /> */}
        <LoginForm />
        {/* <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>
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
