import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Idun</Text>
      <Hello name="Sebastián"/>
      <Hello name="Paco"/>
      <Hello name="Perico"/>
      <LoginForm />
      {/* <StatusBar style="auto" /> */}
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
